const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;

  if (!teams.some((team) => team.id === id)) {
    return res.sendStatus(404).json({ message: 'Time não encontrado' });
  }
  next();
};

module.exports = existingId;