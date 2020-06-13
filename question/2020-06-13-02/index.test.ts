import climbStairs from ".";

test('climbStairs', () => {
  expect(climbStairs(2)).toBe(2)
  expect(climbStairs(3)).toBe(3)
  expect(climbStairs(4)).toBe(5) // [1,1,1,1] [1,1,2] [1,1,2] [2,2] [2,1,1]

})