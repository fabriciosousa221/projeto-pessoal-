// testes/raizQuadrada.test.js
const raizQuadrada = require('../src/raizQuadrada');

describe('Função raizQuadrada', () => {
  test('deve calcular corretamente e tratar entradas inválidas', () => {
    expect(raizQuadrada(16)).toBe(4);
    expect(raizQuadrada(-1)).toBe('Erro: Número negativo');
    expect(raizQuadrada(0)).toBe(0);           
    expect(raizQuadrada(1)).toBe(1);          
    expect(raizQuadrada(2)).toBeCloseTo(1.4142, 4); 
    expect(raizQuadrada(25)).toBe(5);         
  });
});
