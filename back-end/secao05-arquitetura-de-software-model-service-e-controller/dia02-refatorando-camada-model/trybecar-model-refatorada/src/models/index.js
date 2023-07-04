/* Este vai ser o único lugar do nosso código onde importamos o objeto Model direto do seu arquivo */
const passengerModel = require('./passenger.model');
const travelModel = require('./travel.model');

module.exports = {
  passengerModel,
  travelModel,
};