const porcentagem = require('../src/porcentagem');

test('20% de 200 deve ser 40', () => {
  expect(porcentagem(200, 20)).toBe(40);
});

