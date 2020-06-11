// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 输入: ["flower","flow","flight"]
// 输出: "fl"

function longestCommonPrefix(strs: string[]): string {
  let prefix = ''
  if (strs.length === 0) {
    return prefix
  }
  if (strs.length === 1) {
    return strs[0]
  }
  const preItem = strs[0]
  const preMaxLen = preItem.length
  for (let i = 0; i < preMaxLen; i++) {
    const lookahead = prefix + preItem[i]
    // 检查是否为前缀
    const re = new RegExp(`^${lookahead}`)
    if (strs.every(value => re.test(value))) {
      prefix = lookahead
    } else {
      return prefix
    }
  }
  return prefix
};

export default longestCommonPrefix