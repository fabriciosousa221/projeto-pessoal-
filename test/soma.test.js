// testes/soma.test.js
const soma = require('../src/soma');

test('soma de 1 + 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('soma de -1 + 2 deve ser 1', () => {
  expect(soma(-1, 2)).toBe(1);
});

// adicione mais testes para a função soma...
