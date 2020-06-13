// https://leetcode-cn.com/problems/two-sum/
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// function twoSum(nums: number[], target: number): number[] {
//   let sIndex = 0
//   let eIndex = 0
//   for (let index = 0; index < nums.length; index++) {
//     const num = nums[index]
//     const otherNum = target - num
//     nums[index] = otherNum + 1 //避免使用重复数据
//     // const excludeCurrentNums = nums.map((item, exIndex) => exIndex === index ? null : item)
//     // const otherIndex = excludeCurrentNums.indexOf(otherNum)
//     const otherIndex = nums.indexOf(otherNum)
//     if (otherIndex !== -1 && otherIndex !== index) {
//       sIndex = index
//       eIndex = otherIndex
//       break
//     }
//     nums[index] = num
//   }
//   return [sIndex, eIndex]
// };

// // 从三数之和学到双指针解法
// function twoSum(nums: number[], target: number): number[] {
//   let sIndex = 0
//   let eIndex = nums.length - 1
//   const hashNums = nums.map((v,i) => ({ value: v,index:i }))
//   hashNums.sort((a, b) => a.value <= b.value ? -1 : 1)
//   while (sIndex < eIndex) {
//     const sValue = hashNums[sIndex].value
//     const eValue = hashNums[eIndex].value

//     if (sValue + eValue === target) {
//       console.log(sValue, eValue, target)
//       break
//     }
//     if (sValue + eValue > target) {
//       eIndex--
//       continue
//     }
//     sIndex++
//   }
//   return [hashNums[sIndex].index, hashNums[eIndex].index]
// };


// 一遍hash表
function twoSum(nums: number[], target: number): number[] {
  const hashMap: any = {}
  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i]
    if (hashMap[other] !== undefined) {
      return [hashMap[other], i]
    }
    hashMap[nums[i]] = i
  }
  return [0, 0]
};

export default twoSum