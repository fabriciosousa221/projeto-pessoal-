// testes/raizQuadrada.test.js
const raizQuadrada = require('../src/raizQuadrada');

test('raiz quadrada de 16 deve ser 4', () => {
  expect(raizQuadrada(16)).toBe(4);
});

test('raiz quadrada de número negativo deve retornar erro', () => {
  expect(raizQuadrada(-1)).toBe('Erro: Número negativo');
});

// adicione mais testes para a função raizQuadrada...
