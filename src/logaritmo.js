// src/logaritmo.js
function logaritmo(a) {
    if (a <= 0) {
      return 'Erro: Logaritmo de número zero ou negativo';
    }
    return Math.log(a);
  }
  
  module.exports = logaritmo;
  