const { add, sub, mul, div, add3 } = require('../calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('substract 1 from 2 to equal 1', () => {
  expect(sub(2, 1)).toBe(1);
});

test('multiplication of 2 with 2 equal to 4', () => {
  expect(mul(2, 2)).toBe(4);
});

test('sumar 3 numeros', () => {
  expect(add3(1, 1, 1)).toBe(3);
})

test('division of 10 in 2 equal to 5', () => {
  expect(div(10, 2)).toBe(5);
});

/**
 * requerimientos
 * 1. que la calculadora pueda sumar 2 numeros
 * 2. que la calculadora pueda restar dos numeros.
 * 3. que la calculadora pueda sumar 3 numeros.
 */
