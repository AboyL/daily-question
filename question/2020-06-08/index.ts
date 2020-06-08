// 判断一个整数是否是回文数。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 思路
// 二分
function isPalindrome(x: number): boolean {
  if (x < 0) {
    // 小于0必定不为回文数
    return false
  }
  const numberString = x + ''
  const len = numberString.length
  const minLen = numberString.length / 2
  for (let i = 0; i < minLen; i++) {
    if (numberString[i] !== numberString[len - i - 1]) {
      return false
    }
  }
  return true
};

export default isPalindrome