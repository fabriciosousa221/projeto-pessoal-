// testes/fatorial.test.js
const fatorial = require('../src/fatorial');

test('fatorial de 5 deve ser 120', () => {
  expect(fatorial(5)).toBe(120);
});

test('fatorial de número negativo deve retornar erro', () => {
  expect(fatorial(-1)).toBe('Erro: Número negativo');
});

// adicione mais testes para a função fatorial...
