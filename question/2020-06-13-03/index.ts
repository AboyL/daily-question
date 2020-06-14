// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
function removeDuplicates(nums: number[]): number {
  let index = 0
  while (index < nums.length) {
    let rIndex = index + 1

    while (rIndex < nums.length && nums[rIndex] === nums[index]) {
      rIndex++
    }
    nums.splice(index + 1, rIndex - (index + 1))
    index++
  }
  return nums.length
};

export default removeDuplicates