const { addCarSchema } = require('./schemas');

const validateNewCar = ({ model, licensePlate, year, color, driverId }) => {
  // Se o método validate não der certo, ele retornar um erro
  // Por isso desestruturar em uma variavel
  const { error } = addCarSchema.validate({ model, licensePlate, year, color, driverId });

  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateNewCar,
};