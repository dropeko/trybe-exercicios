// src/app.js

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');
const teams = require('./utils/teams');
require('express-async-errors');

const app = express();

let nextId = 3;

// cria um middleware que processa corpos de requisições escritos em JSON
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(apiCredentials); 
app.use(express.static('./images'));

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);

  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);

  teams.splice(index, 1);

  res.sendStatus(204);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  // confere se a sigla proposta está inclusa nos times autorizados
  // confere se já não existe um time com essa sigla
  if (
      !req.teams.teams.includes(req.body.sigla)
      && teams.every((team) => team.sigla !== req.body.sigla)
    ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };

  teams.splice(index, 1, updated);

  res.status(201).json(updated);
});

module.exports = app;