// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) e retorne os dados de ano, mês e dia formatados.

describe('testa a função formatDate', () => {
  test('ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY', () => {
    expect(formatDate('1981', '7', '31', '22', '47', '12')).tobe('31/7/1981');
  });
});