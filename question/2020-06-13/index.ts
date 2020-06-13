// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
// 找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

//  

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//  

// 提示：

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a <= b ? -1 : 1)
  let min = -Infinity
  let minAbs = Infinity
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const value = nums[i]
    let L = i + 1
    let R = len - 1

    while (L < R) {
      const Lvalue = nums[L]
      const Rvalue = nums[R]
      const sum = Lvalue + Rvalue + value

      const difference = sum - target
      const differenceAbs = Math.abs(difference)
      if (differenceAbs < minAbs) {
        min = sum
        minAbs = differenceAbs
      }
      // 根据实际情况进行判断
      // 假如 target 大于 target 那么应该缩小
      if (sum > target) {
        // 假如缩小了以后abs变小了 那么就可以继续缩小 直到abs变大
        R--
        continue
      }

      if (sum < target) {
        // 假如缩小了以后abs变小了 那么就可以继续缩小 直到abs变大
        L++
        continue
      }
      if (sum === target) {
        return target
      }
    }

  }
  return min
};

console.log(
  threeSumClosest(
    [-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33],
    0
  )
)
export default threeSumClosest