// src/raizQuadrada.js
function raizQuadrada(a) {
    if (a < 0) {
      return 'Erro: Número negativo';
    }
    return Math.sqrt(a);
  }
  
  module.exports = raizQuadrada;
  