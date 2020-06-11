import dailyTemperatures from "."

test('dailyTemperatures', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
  expect(dailyTemperatures([1, 2, 3])).toEqual([1, 1, 0])
  expect(dailyTemperatures([3, 2, 1])).toEqual([0, 0, 0])
})