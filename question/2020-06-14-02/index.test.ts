import rotate from "."

test('旋转数组', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7]
  rotate(arr1, 3)
  expect(arr1).toEqual(
    [5, 6, 7, 1, 2, 3, 4]
  )

  const arr2 = [-1, -100, 3, 99]
  rotate(arr2, 2)
  expect(arr2).toEqual(
    [3, 99, -1, -100]
  )

  const arr3 = [1, 2, 3, 4, 5, 6]
  rotate(arr3, 18)
  expect(arr3).toEqual(
    [1, 2, 3, 4, 5, 6]
  )

  const arr4 = [1, 2, 3]
  rotate(arr4,2)
  expect(arr4).toEqual(
    [2,3,1]
  )
})