import twoSum from "."

test('two number', () => {
  expect(twoSum([1, 2, 3, 4], 3)).toEqual([0, 1])
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([1, 7, 11, 10], 11)).toEqual([0, 3])
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum([3, 3], 6)).toEqual([0,1])


})