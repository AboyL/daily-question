// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid(s: string): boolean {
  const arr: string[] = []
  const bracketMap: {
    [propName: string]: string;
  } = {
    ')': '(',
    '}': '{',
    ']': '[',

  }
  const leftBracket: string[] = Object.values(bracketMap)

  for (let c of s) {
    if (leftBracket.includes(c)) {
      // 此时入栈
      arr.push(c)
    } else {
      // 判断是否出栈
      if (bracketMap[c] === arr[arr.length - 1]) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
};

export default isValid