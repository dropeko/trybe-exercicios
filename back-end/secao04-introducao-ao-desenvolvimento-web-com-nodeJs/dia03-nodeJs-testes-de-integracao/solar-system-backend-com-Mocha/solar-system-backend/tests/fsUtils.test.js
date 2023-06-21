// MOCHA escreve testes em NODEJS. Não precisa importar Mocha direto no arquivo de teste.
// CHAI ferramenta para ajudar a fazer testes mais simples de ler
const { expect } = require('chai');

const { readMissionData } = require('../src/utils/fsUtils');

describe('A função readMissionData', function() {
  it('testa se retorna um array', async function() {
    const missionData = await readMissionData();

    expect(missionData).instanceOf(Array);
  });
});