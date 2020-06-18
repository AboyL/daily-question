function plusOne0(digits: number[]): number[] {
  const num: number[] = []
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    const d = digits[i]
    const n = d + carry
    const l = n % 10
    num.unshift(l)
    carry = Math.floor(n / 10)
  }
  if (carry !== 0) {
    num.unshift(carry)
  }
  return num
};

// 参考题解
// 从普遍去优化特例
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + 1
    digits[i] = digits[i] % 10

    if (digits[i] !== 0) {
      return digits
    }
  }
  digits.unshift(1)
  return digits
};


console.log(
  plusOne(
    [1, 2, 3]
  )
)
export default plusOne