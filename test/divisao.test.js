const divisao = require('../src/divisao');

describe('Função divisão', () => {
  test('deve retornar 5 para 10 / 2 e erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(10, 0)).toBe('Erro: Divisão por zero');
  });
});
