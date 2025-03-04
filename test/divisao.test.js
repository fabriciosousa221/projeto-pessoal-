// testes/divisao.test.js
const divisao = require('../src/divisao');

test('divisão de 10 / 2 deve ser 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('divisão por zero deve retornar erro', () => {
  expect(divisao(10, 0)).toBe('Erro: Divisão por zero');
});

// adicione mais testes para a função divisao...
