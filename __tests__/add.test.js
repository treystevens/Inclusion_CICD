const add = require('../add');

test('Should add 5 + 5', () => {
  const expected = add(5, 5);
  const result = 10;
  expect(expected).toBe(result);
});
