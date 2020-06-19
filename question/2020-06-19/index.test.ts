import moveZeroes from "."

test('moveZeroes', () => {
  const nums = [0, 1, 0, 3, 12]
  moveZeroes(nums)
  expect(nums).toEqual(
    [1, 3, 12, 0, 0]
  )

  const nums1 = [1, 2, 3, 0]
  moveZeroes(nums1)
  expect(nums1).toEqual(
    [1, 2, 3, 0]
  )

  const nums2 = [0, 0, 0]
  moveZeroes(nums2)
  expect(nums2).toEqual(
    [0, 0, 0]
  )

  const nums3 = [0, 0, 1]
  moveZeroes(nums3)
  expect(nums3).toEqual(
    [1, 0, 0]
  )
  
})