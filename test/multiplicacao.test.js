const multiplicacao = require('../src/multiplicacao');

test('multiplicação de 2 * 3 deve ser 6', () => {
  expect(multiplicacao(2, 3)).toBe(6);
});

