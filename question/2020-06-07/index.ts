// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

function reverse(x: number): number {
  const Max = 2 ** 31 - 1
  const Min = -(2 ** 31)
  const stringNumber = x + ''
  let reverseStringNumber = ''
  let hasSymbol = false //是否有符号
  let state = 0
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    // 判断c是否为0 直接在结尾的时候进行排除
    const c = stringNumber[i]
    if (c === '0' && state === 0) {
      // 
    } else {
      state = 1
      // 进行符号判断
      switch (c) {
        case '+':
        case '-':
          reverseStringNumber = c + reverseStringNumber
          hasSymbol = true
          break
        default:
          reverseStringNumber = reverseStringNumber + c
      }
    }
  }
  // 进行对比判断
  const MaxString = (Max + '')
  const MaxLength = MaxString.length
  let trueLen = reverseStringNumber.length
  let nodeSymbolString = reverseStringNumber
  if (hasSymbol) {
    trueLen = reverseStringNumber.length - 1
    nodeSymbolString = nodeSymbolString.slice(1)
  }
  if (trueLen > MaxLength) {
    return 0
  }
  if (trueLen === MaxLength) {
    for (let i = 0; i <= MaxLength - 1; i++) {
      if (nodeSymbolString[i] > MaxString[i]) {
        return 0
      }
      if(nodeSymbolString[i] < MaxString[i]){
        break
      }
    }
  }
  return (Number(reverseStringNumber))
};

export default reverse