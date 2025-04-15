const logaritmo = require('../src/logaritmo');

describe('Função logaritmo', () => {
  test('deve calcular corretamente e tratar entradas inválidas', () => {
    expect(logaritmo(10)).toBeCloseTo(2.302585, 5);
    expect(logaritmo(-10)).toBe('Erro: Logaritmo de número zero ou negativo');
  });
});

