// Exemplo de Informação que o createCar deve receber.
// const exampleCar = {
//   model: 'Chevrolet Monza',
//   color: 'Branco',
//   licensePlate: 'ABC1234',
//   year: 2019,
//   driverId: 1,
// };

const { carModel, driverModel } = require('../models');
const { validateNewCar } = require('./validations/validationsInputValues');

const driverExists = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  return driver || false;
};

const createCar = async ({ model, licensePlate, year, color, driverId }) => {
  // Verifica se o novo carro tem os parametros válidos
  const error = validateNewCar({ model, color, year, licensePlate, driverId });
  if (error) return { status: error.status, data: { message: error.message } };

  // Verifica se o motorista existe no BD
  const driver = await driverExists(driverId);
  if (!driver) return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };

  // Insere o novo carro no BD e retorna o status e o novo objeto criado
  const carId = await carModel.insert({ model, licensePlate, year, color, driverId });
  const newCar = { id: carId, model, licensePlate, year, color, driverId };
  return { status: 'SUCCESSFUL', data: newCar };
};

const findAll = async () => {
  const cars = await carModel.findAll();
  return { status: 'SUCCESSFUL', data: cars };
};

module.exports = {
  createCar,
  findAll,
};
