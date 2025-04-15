const soma = require('../src/soma');

describe('Função soma', () => {
  test('deve somar corretamente em diferentes cenários', () => {
    expect(soma(1, 2)).toBe(3);
    expect(soma(-1, 2)).toBe(1);
    expect(soma(0, 0)).toBe(0);            
    expect(soma(-3, -7)).toBe(-10);       
    expect(soma(100, 200)).toBe(300);     
    expect(soma(2.5, 3.5)).toBe(6);       
  });
});
