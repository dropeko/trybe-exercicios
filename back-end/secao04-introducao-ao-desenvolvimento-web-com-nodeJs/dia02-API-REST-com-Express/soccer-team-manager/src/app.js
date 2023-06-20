// src/app.js
const express = require('express');

// Em nossa API, os dados serão armazenados em um array de objetos. 
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

// ENDPOINTS:

app.get(
  // 1o parametro é a rota a ser requisitada
  '/',
  // 2o parametro é a função responsavel por responder a requisição
  (req, res) => res.status(200).json({ message: 'Hello, World! Its me again =)' }),
);

app.get('/teams', (req, res) => res.status(200).json({ teams }));

// Que tal treinar seus conhecimentos e listar um time pelo seu id? Crie um endpoint do tipo GET com a rota /teams/:id.
app.get('/teams/:id', (req, res) => {
  const team = teams.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(team);
});

app.post('/teams', (req, res) => {
  // Recebe as infos da requisição pelo corpo 
  const newTeam = { ...req.body };
  // Faz o push das infos
  teams.push(newTeam);
  // Retorno
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
