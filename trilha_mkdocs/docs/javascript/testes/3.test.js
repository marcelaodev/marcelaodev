const fn = require('./3');

test('vazio', () => {
  expect(fn()).toBe('');
});

test('um', () => {
  expect(fn(1)).toBe('*');
});

test('cinco - teste falhando', () => {
  expect(fn(5)).toBe('');
});