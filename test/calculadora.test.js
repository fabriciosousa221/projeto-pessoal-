const {
    divisao,
    fatorial,
    logaritmo,
    modulo,
    multiplicacao,
    porcentagem,
    potencia,
    raizQuadrada,
    soma,
    subtracao
  } = require('../src/calculadora');
  
  describe('Função divisão', () => {
    test('deve retornar 5 para 10 / 2 e erro para divisão por zero', () => {
      expect(divisao(10, 2)).toBe(5);
      expect(divisao(10, 0)).toBe('Erro: Divisão por zero');
    });
  });
  
  describe('Função fatorial', () => {
    test('deve calcular corretamente e tratar casos inválidos', () => {
      expect(fatorial(5)).toBe(120);
      expect(fatorial(-1)).toBe('Erro: Número negativo');
      expect(fatorial(0)).toBe(1);
      expect(fatorial(1)).toBe(1);
      expect(fatorial(3)).toBe(6);
    });
  });
  
  describe('Função logaritmo', () => {
    test('deve calcular corretamente e tratar entradas inválidas', () => {
      expect(logaritmo(10)).toBeCloseTo(2.302585, 5);
      expect(logaritmo(-10)).toBe('Erro: Logaritmo de número zero ou negativo');
    });
  });
  
  test('resto da divisão de 5 % 2 deve ser 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });
  
  test('multiplicação de 2 * 3 deve ser 6', () => {
    expect(multiplicacao(2, 3)).toBe(6);
  });
  
  test('20% de 200 deve ser 40', () => {
    expect(porcentagem(200, 20)).toBe(40);
  });
  
  test('2 elevado a 3 deve ser 8', () => {
    expect(potencia(2, 3)).toBe(8);
  });
  
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
  
