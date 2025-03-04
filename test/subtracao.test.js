// testes/subtracao.test.js
const subtracao = require('../src/subtracao');

test('subtração de 5 - 3 deve ser 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('subtração de -1 - 2 deve ser -3', () => {
  expect(subtracao(-1, 2)).toBe(-3);
});

// adicione mais testes para a função subtracao...
