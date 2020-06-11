import longestCommonPrefix from "."

describe('longestCommonPrefix', () => {

  test('longestCommonPrefix', () => {

    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe('fl')
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('')

  })
})