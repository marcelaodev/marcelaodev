const mediaIdades = require('./5');

test('média de idades de 3 pessoas - teste falhando', () => {
  // act - arrange - act
  // Leia mais sobre:
  // https://medium.com/@pablodarde/o-padr%C3%A3o-triple-a-arrange-act-assert-741e2a94cf88

  // arrange
  const grupo = [
    { nome: 'João', idade: 20 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Lucas', idade: 25 },
  ];
  // act
  expect(mediaIdades(grupo))
    .toBe(25);  // assert
});

test('lista vazia retorna 0 - teste falhando', () => {
  expect(mediaIdades([])).toBe(1);
});