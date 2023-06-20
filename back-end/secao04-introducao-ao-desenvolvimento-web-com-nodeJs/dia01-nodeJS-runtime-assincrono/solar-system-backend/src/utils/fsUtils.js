const { readFile } = require('fs').promises;
const { writeFile } = require('fs/promises');
const path = require('path');

const MISSIONS_DATA_PATH = '../../data/missions.json';

// função para ler o arquivo JSON. Esta função TEM de ser ASSINCRONA
async function readMissionData() {
  // Qualquer leitura ou escrita de arquivos tem que ter TRATAMENTO DE EXCEÇÃO
  try {
    const data = await readFile(path.resolve(__dirname, MISSIONS_DATA_PATH));
    // Como sabemos que o arquivo de leitura é um JSON, vamos 'traduzi-lo' com a linha abaixo
    const missions =  JSON.parse(data)
    
    return missions
  } catch(error) {
    console.log(error.message);
  }
}

// função para escrever no arquivo JSON. Esta função TEM de ser ASSINCRONA
async function writeMissionData(newMission) {
  try {
    // Para escrever no arquivo, o primeiro passo é LÊ-LO 
    const oldMissions = await readMissionData();
    // Depois de ler o arquivo, criamos um array que recebe o arquivo 'antigo', o distruibuimos em array com SPREAD OPERATOR e, em seguida, adicionamos a nova missão
    // TEM que converter em STRING pois é em string que a gente escreve nos arquivos. Função JSON.stringfy()
    const allMissions = JSON.stringify([...oldMissions, newMission]);
    // ESCREVENDO no arquivo JSON lido acima.
    await writeFile(path.resolve(__dirname, MISSIONS_DATA_PATH), allMissions)

  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  writeMissionData,
  readMissionData
}