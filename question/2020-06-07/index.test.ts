import reverse from "."

test('reverse', () => {
  expect(reverse(123)).toBe(321)
  expect(reverse(120)).toBe(21)
  expect(reverse(2147483647 + 1)).toBe(0)
  expect(reverse(-123)).toBe(-321)
  expect(reverse(-2147483412)).toBe(-2143847412)
})