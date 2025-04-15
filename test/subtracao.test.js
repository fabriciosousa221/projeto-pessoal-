// testes/subtracao.test.js
const subtracao = require('../src/subtracao');

describe('Função subtração', () => {
  test('deve subtrair corretamente em diferentes cenários', () => {
    expect(subtracao(5, 3)).toBe(2);
    expect(subtracao(-1, 2)).toBe(-3);
    expect(subtracao(0, 0)).toBe(0);
    expect(subtracao(100, 50)).toBe(50);
    expect(subtracao(-5, -3)).toBe(-2);
    expect(subtracao(3, 5)).toBe(-2);
  });
});
