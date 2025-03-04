// testes/logaritmo.test.js
const logaritmo = require('../src/logaritmo');

test('logaritmo de 10 deve ser 2.302585', () => {
  expect(logaritmo(10)).toBeCloseTo(2.302585, 5);
});

test('logaritmo de número negativo deve retornar erro', () => {
  expect(logaritmo(-10)).toBe('Erro: Logaritmo de número zero ou negativo');
});

// adicione mais testes para a função logaritmo...
