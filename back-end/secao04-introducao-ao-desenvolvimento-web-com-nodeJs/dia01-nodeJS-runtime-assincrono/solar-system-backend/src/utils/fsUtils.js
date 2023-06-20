const { readFile } = require('fs').promises;
const path = require('path');

// função para ler o arquivo JSON. Esta função TEM de ser ASSINCRONA
async function readMissionData() {
  // Qualquer leitura ou escrita de arquivos tem que ter TRATAMENTO DE EXCEÇÃO
  try {
    const data = await readFile(path.resolve(__dirname, '../../data/missions.json'));
    // Como sabemos que o arquivo de leitura é um JSON, vamos 'traduzi-lo' com a linha abaixo
    const missions =  JSON.parse(data)
    return missions
    console.log(data);
  } catch(error) {
    console.log(error.message);
  }
}

module.exports = {
  readMissionData
}