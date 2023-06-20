const { question, questionInt } = require('readline-sync');
const { writeMissionData } = require("./utils/fsUtils");

async function main() {
  // writeMissionData({
  //   "id": 101,
  //   "name": "Tryber 2",
  //   "year": "2023",
  //   "country": "Brasil",
  //   "destination": "Lua"
  // })

  // Captura os elementos para enviar a informação para o arquivo de escrita
  // O id não de linha de comando
  // Não é a entidade quem cria o id, é quem GUARDA a informação
  const name = question('Qual o nome da Missão?: ')
  const year = readLine.questionInt('Qual o ano da Missão?: ')
  const country = readLine.question('Qual o país da Missão?: ')
  const destination = readLine.question('Qual o destino da Missão?: ')

  // Guarda as informações em uma variavel no formato necessário para escrever no arquivo JSON
  const newMission = { name, year, country, destination };
  
  // Chama a função de escrita e passa as informações formatadas como parametro
  writeMissionData(newMission);
  console.log('Nova missão registrada com sucesso!');
}

main();