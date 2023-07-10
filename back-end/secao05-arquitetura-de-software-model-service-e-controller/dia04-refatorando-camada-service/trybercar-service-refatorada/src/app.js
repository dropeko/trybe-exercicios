const express = require('express');
const { carService } = require('./services/index');

const app = express();

app.use(express.json());

app.post('/cars', async (req, res) => {
  // Desestrutura os parametros da requisição que vieram no body
  const { model, licensePlate, year, color, driverId } = req.body;
  // O retordo da camada de serviço agora é um objeto com duas chaves: status e data
  const serviceResponse = await carService.createCar({
    model, 
    licensePlate, 
    year, 
    color, 
    driverId,
  });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
});

app.get('/cars', async (_req, res) => {
  const serviceResponse = await carService.findAll();
  
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
});

module.exports = app;
