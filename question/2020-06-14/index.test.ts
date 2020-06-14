import maxProfit from "."

test('maxProfit', () => {
  expect(maxProfit(
    [7, 1, 5, 3, 6, 4]
  )).toBe(7)

  expect(maxProfit(
    [0]
  )).toBe(0)

  expect(maxProfit(
    [0, 0, 0]
  )).toBe(0)

  expect(maxProfit(
    [1, 1, 1]
  )).toBe(0)

  expect(maxProfit(
    [1, 1, 1, 2, 2, 2, 2]
  )).toBe(1)

  expect(maxProfit(
    [1, 2, 3, 4, 5]
  )).toBe(4)

  expect(maxProfit(
    [7, 6, 4, 3, 1]
  )).toBe(0)

  expect(maxProfit(
    [6, 1, 3, 2, 4, 7]
  )).toBe(7)

  expect(maxProfit(
    [7, 1, 9, 1, 6]
  )).toBe(13)


})