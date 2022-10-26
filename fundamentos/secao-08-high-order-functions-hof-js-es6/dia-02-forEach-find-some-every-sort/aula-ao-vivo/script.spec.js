const multiply = require('./script');
const { infoPizzas, priceLessThan, everyPriceBiggerThan, findPizza, sortPizzas } = require('./pizzas');

describe('Testando HoF forEach().', () => {
  it('Verifica se a função multiply existe.', () => {
    expect(typeof multiply).toBe('function');
  })

  it('Multiplica cada elemento por 2', () => {
    expect(multiply([1, 2, 3, 4, 5], 2)).toEqual([2, 4, 6, 8, 10]);
  })

  it('Multiplica cada elemento por 3', () => {
    expect(multiply([1, 2, 3, 4, 5], 3)).toEqual([3, 6, 9, 12, 15]);
  })

  it('Multiplica cada elemento por 845', () => {
    expect(multiply([1, 2, 3, 4, 5], 845)).toEqual([845, 1690, 2535, 3380, 4225]);
  })
});

// describe('Testa a função infoPizzas', () => {
//   it('Verifica se a pizza é paga ou grátis', () => {
//     expect(infoPizzas()).toEqual([
//       { flavor: 'Frango com Catupiry', price: 12.20, type: 'Pizza paga' },
//       { flavor: 'Marguerita', price: 13.50, type: 'Pizza paga'},
//       { flavor: 'Gratinada', price: 15.32, type: 'Pizza paga'},
//       { flavor: 'Quatro Queijos', price: 13.50, type: 'Pizza paga' },
//       { flavor: 'Xablau com um pouquinho assim de molho', price: 0, type: 'Pizza grátis' }
//     ])
//   })
// });

describe('Testa a função priceLessThan', () => {
  it('Verifica se existe alguma pizza com um preço menor do que 15', () => {
    expect(priceLessThan(15)).toBe(true);
  });

  it('Verifica se existe alguma pizza com um preço menor do que 10', () => {
    expect(priceLessThan(10)).toBe(true);
  });

  it('Verifica se existe alguma pizza com um preço menor do que 0', () => {
    expect(priceLessThan(0)).toBe(false);
  });
});

describe('Testa a função everyPriceBiggerThan', () => {
  it('Verifica se TODAS as pizzas tem o preço maior ou igual a 10', () => {
    expect(everyPriceBiggerThan(10)).toBe(false);
  });

  it('Verifica se TODAS as pizzas tem o preço maior ou igual a 0', () => {
    expect(everyPriceBiggerThan(0)).toBe(true);
  });
});

describe('Testa a função findPizza', () => {
  it('Imprime a primeira pizza com valor igual a 13.50', () => {
    expect(findPizza(13.50)).toEqual({ flavor: 'Marguerita', price: 13.5 });
  });
});

describe('Testa a função sortPizza', () => {
  it('Ordena as pizzas por preço', () => {
    expect(sortPizzas('price')).toStrictEqual([
      { flavor: 'Xablau com um pouquinho assim de molho', price: 0 },
      { flavor: 'Frango com Catupiry', price: 12.2 },
      { flavor: 'Marguerita', price: 13.5 },
      { flavor: 'Quatro Queijos', price: 13.5 },
      { flavor: 'Gratinada', price: 15.32 }
    ]);
  });

  it('Ordena as pizzas por sabor', () => {
    expect(sortPizzas('flavor')).toStrictEqual([
      { flavor: 'Frango com Catupiry', price: 12.2 },
      { flavor: 'Gratinada', price: 15.32 },
      { flavor: 'Marguerita', price: 13.5 },
      { flavor: 'Quatro Queijos', price: 13.5 },
      { flavor: 'Xablau com um pouquinho assim de molho', price: 0 }
    ]);
  });

  it('Caso não seja flavor nem price, retornar Parâmetro inválido', () => {
    expect(sortPizzas('xablau')).toBe('Parâmetro inválido');
  });
});