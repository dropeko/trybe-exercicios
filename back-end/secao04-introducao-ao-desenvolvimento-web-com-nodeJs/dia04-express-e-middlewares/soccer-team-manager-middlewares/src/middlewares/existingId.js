const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const checkTeamExists = Number(req.params.id);

  if (teams.some((team) => team.id === checkTeamExists)) {
    return next();
  }
  res.sendStatus(404);
};

module.exports = existingId;