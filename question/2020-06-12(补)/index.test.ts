import threeSum from "."

test('三数之和', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual(
    [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
  )

  expect(threeSum([0, 0, 0])).toEqual(
    [
      [0, 0, 0],
    ]
  )

  expect(threeSum([0, 0])).toEqual(
    []
  )

  expect(threeSum([-1, 0, 1, 0])).toEqual(
    [[-1, 0, 1]]
  )

  expect(threeSum(
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
  )).toEqual(
    [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
  )

})