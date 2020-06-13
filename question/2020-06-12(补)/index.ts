// https://leetcode-cn.com/problems/3sum/
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c 
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// function threeSum(nums: number[]): number[][] {
//   if (nums.length < 3) {
//     return []
//   }
//   let positiveArr: number[] = []
//   let negativeArr: number[] = []
//   let zeroNumber = 0
//   const result = []
//   nums.forEach(num => {
//     if (num > 0) {
//       positiveArr.push(num)
//     } else if (num < 0) {
//       negativeArr.push(num)
//     } else {
//       if (zeroNumber === 0) {
//         positiveArr.push(num)
//       }
//       zeroNumber++
//       if (zeroNumber === 3) {
//         result.push([0, 0, 0])
//       }
//     }
//   })
//   let t = Date.now()
//   for (let i = 0; i < positiveArr.length; i++) {
//     for (let j = i + 1; j < positiveArr.length; j++) {
//       const a = positiveArr[i]
//       const b = positiveArr[j]
//       const c = -(a + b)
//       if (negativeArr.includes(c)) {
//         result.push([c, Math.min(a, b), Math.max(a, b)])
//       }
//     }
//   }

//   for (let i = 0; i < negativeArr.length; i++) {
//     for (let j = i + 1; j < negativeArr.length; j++) {
//       const a = negativeArr[i]
//       const b = negativeArr[j]
//       const c = -(a + b)
//       if (positiveArr.includes(c)) {
//         result.push([Math.min(a, b), Math.max(a, b), c])
//       }
//     }
//   }
//   console.log('t1', Date.now() - t)
//   t = Date.now()
//   // 去重
//   const r = Array(...new Set(result.map(v => v.join('/')))).map(v => (v.split('/').map(v => Number(v))))
//   console.log('t2', Date.now() - t)
//   return r
// };


// 双指针解法
// 1 先排序 避免重复
// 2 将三数和变成两数和

function threeSum(nums: number[]): number[][] {
  const len = nums.length

  if (len < 3) {
    return []
  }
  // 先进行一次排序
  nums.sort((a, b) => a <= b ? -1 : 1)
  const result: number[][] = []
  for (let i = 0; i < len; i++) {
    const value = nums[i]
    if (value > 0) {
      break
    }
    // 去重
    if (i > 0 && value === nums[i - 1]) {
      continue
    }
    let L = i + 1
    let R = len - 1
    while (L < R) {
      const Lvalue = nums[L]
      const Rvalue = nums[R]
      const sum = Lvalue + Rvalue + value
      if (sum === 0) {
        result.push([value, Lvalue, Rvalue])
        // 去重
        while (L < R && nums[L] === nums[L + 1]) {
          L++
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R--
        }
        L++
        R--
        continue
      }
      if (sum < 0) {
        L++
        continue
      }
      R--
    }
  }
  return result

};

console.log(threeSum(
  [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
))

// threeSum(number)
export default threeSum