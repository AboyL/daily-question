import removeDuplicates from "."

test('删除排序数组中的重复项', () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2)
  expect(removeDuplicates([1, 1, 1, 1, 1])).toBe(1)
  expect(removeDuplicates(
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
  )).toBe(5)
})