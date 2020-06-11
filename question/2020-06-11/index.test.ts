import isValid from "."

test('test isValid', () => {
  expect(isValid("()")).toBeTruthy()
  expect(isValid("()[]{}")).toBeTruthy()
  expect(isValid("{[]}")).toBeTruthy()

  expect(isValid("(]")).toBeFalsy()
  expect(isValid("([)]")).toBeFalsy()

})