const add = require('../add');

test('Should add 5 + 5', () => {
  const expected = add(5, 5);
  const result = 10;
  expect(expected).toBe(result);
});

test('Should return null if not a number', () => {
  const expected = add('hello', 'world');
  const result = null;
  expect(expected).toBe(result);
});
