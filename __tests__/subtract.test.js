const subtract = require('../subtract');

test('Should subtract one number from another', () => {
  const expected = subtract(10, 5);
  const result = 6;
  expect(expected).toBe(result);
});

test('Should return null if string input', () => {
  const expected = subtract('hello', 'world');
  const result = null;
  expect(expected).toBe(result);
});
