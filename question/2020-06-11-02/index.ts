// https://leetcode-cn.com/problems/daily-temperatures/
// 每日一题练习

// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
// 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

// n^2
// function dailyTemperatures(T: number[]): number[] {
//   const arr: number[] = []
//   const len = T.length
//   for (let i = 0; i < len; i++) {
//     if (T[i] === 100) {
//       arr[i] = 0
//       continue
//     }
//     for (let j = i; j < len; j++) {
//       if (T[j] > T[i]) {
//         arr[i] = (j - i)
//         break
//       }
//       if (j === len - 1) {
//         arr[i] = 0
//         break
//       }
//     }
//   }
//   return arr
// };

// 单调栈解法
function dailyTemperatures(T: number[]): number[] {
  const arr: number[] = new Array(T.length).fill(0)
  const stack: number[] = []
  const len = T.length
  for (let i = 0; i < len;) {
    const lastStackValue = stack.length && stack[stack.length - 1]
    const lastValue = (stack.length && T[lastStackValue]) || 0
    if (stack.length === 0) {
      stack.push(i)
    } else {
      // 假如下一个的元素大于栈顶的元素 进行一次出栈并且进行标记
      if (T[i] > lastValue) {
        arr[lastStackValue] = i - lastStackValue
        stack.pop()
        continue
      } else {
        stack.push(i)
      }
    }
    ++i
  }
  return arr
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
export default dailyTemperatures