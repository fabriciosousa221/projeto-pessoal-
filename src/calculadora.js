// src/calculadora.js

function divisao(a, b) {
    if (b === 0) {
      return 'Erro: Divisão por zero';
    }
    return a / b;
  }
  
  function fatorial(n) {
    if (n < 0) return 'Erro: Número negativo';
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  function logaritmo(a) {
    if (a <= 0) {
      return 'Erro: Logaritmo de número zero ou negativo';
    }
    return Math.log(a);
  }
  
  function modulo(a, b) {
    return a % b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function porcentagem(a, b) {
    return (a * b) / 100;
  }
  
  function potencia(a, b) {
    return Math.pow(a, b);
  }
  
  function raizQuadrada(a) {
    if (a < 0) {
      return 'Erro: Número negativo';
    }
    return Math.sqrt(a);
  }
  
  function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  module.exports = {
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
  };
  