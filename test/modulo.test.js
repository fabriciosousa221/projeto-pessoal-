// testes/modulo.test.js
const modulo = require('../src/modulo');

test('resto da divisão de 5 % 2 deve ser 1', () => {
  expect(modulo(5, 2)).toBe(1);
});

// adicione mais testes para a função modulo...
