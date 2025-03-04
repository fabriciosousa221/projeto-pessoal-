// src/fatorial.js
function fatorial(n) {
    if (n < 0) return 'Erro: Número negativo';
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  module.exports = fatorial;
  