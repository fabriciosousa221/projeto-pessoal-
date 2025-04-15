const fatorial = require('../src/fatorial');

describe('Função fatorial', () => {
  test('deve calcular corretamente e tratar casos inválidos', () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(-1)).toBe('Erro: Número negativo');
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(3)).toBe(6);
  });
});
