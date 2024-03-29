const express = require('express');
const camelize = require('camelize');
const connection = require('./models/connection');
const { passengerModel, travelModel } = require('./models');

const app = express();

app.use(express.json());

const passengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  return passenger || false;
};

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const passenger = await passengerExists(passengerId);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

  const travelId = await travelModel.insert(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );
  const newTravel = travelModel.findById(travelId);

  return res.status(201).json(newTravel);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const WAITING_DRIVER = 1;
  const openTravelsFromDB = await travelModel.findByStatus(WAITING_DRIVER);
  res.status(200).json(openTravelsFromDB);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;

  const [[{ travel_status_id: travelStatusId }]] = await connection.execute(
    `SELECT
      TR.id,
      TR.driver_id,
      TR.starting_address,
      TR.ending_address,
      TR.request_date,
      TR.travel_status_id,
      TS.status,
      WP.address,
      WP.stop_order
    FROM travels AS TR INNER JOIN travel_status AS TS 
      ON TR.travel_status_id = TS.id
    LEFT JOIN waypoints AS WP 
      ON WP.travel_id = TR.id
    WHERE TR.id = ?;`,
    [travelId],
  );

  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  await connection.execute(
    'UPDATE travels SET travel_status_id = ?, driver_id = ? WHERE id = ?',
    [nextTravelStatusId, driverId, travelId],
  );

  const [travelsFromDB] = await connection.execute(
    `SELECT
      TR.id,
      TR.driver_id,
      TR.starting_address,
      TR.ending_address,
      TR.request_date,
      TR.travel_status_id,
      TS.status,
      WP.address,
      WP.stop_order
    FROM travels AS TR INNER JOIN travel_status AS TS 
      ON TR.travel_status_id = TS.id
    LEFT JOIN waypoints AS WP 
      ON WP.travel_id = TR.id
    WHERE TR.id = ?;`,
    [travelId],
  );

  const travelWithWaypointsUpdated = groupWaypoints(camelize(travelsFromDB));

  res.status(200).json(travelWithWaypointsUpdated);
});

module.exports = app;
