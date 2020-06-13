import threeSumClosest from "."

test('threeSumClosest',()=>{
  expect(threeSumClosest([-1,2,1,-4],1)).toBe(2)
  expect(threeSumClosest(
    [4,0,5,-5,3,3,0,-4,-5],
    -2
  )).toBe(-2)
  expect(threeSumClosest(
    [-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33],
    0
  )).toBe(0)
})