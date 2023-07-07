// Neste arquivo, estabeleceremos o formato dos dados (schema) que esperamos receber em uma solicitação 
// de nosso serviço. Após estabelecermos esses critérios, vamos criar as validações de acordo com eles 
// em conjunto com as regras do negócio.
const Joi = require('joi');

const addCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number().integer(),
  driverId: Joi.number(),
});

module.exports = { addCarSchema };