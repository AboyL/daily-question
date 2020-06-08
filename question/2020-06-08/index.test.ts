import isPalindrome from "."

test('isPalindrome', () => {
  expect(isPalindrome(121)).toBeTruthy()
  expect(isPalindrome(222)).toBeTruthy()
  expect(isPalindrome(123)).toBeFalsy()
  expect(isPalindrome(120)).toBeFalsy()
  expect(isPalindrome(-222)).toBeFalsy()
})