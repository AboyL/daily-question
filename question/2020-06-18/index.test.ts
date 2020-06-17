import intersect from "."

test('intersect', () => {
  expect(intersect(
    [1, 2, 2, 1],
    [2, 2]
  )
  ).toEqual([2, 2])

  expect(intersect(
    [4, 9, 5],
    [9, 4, 9, 8, 4]
  ))
    .toEqual([9, 4])

  expect(intersect(
    [],
    []
  )
  ).toEqual([])

  expect(intersect(
    [0, 0, 0],
    [0, 0, 0],
  )
  ).toEqual(
    [0, 0, 0],
  )

})