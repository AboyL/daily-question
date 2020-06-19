// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
function moveZeroes1(nums: number[]): void {
  let index = 0
  for (let i = 0; i < nums.length - index; i++) {
    if (nums[i] === 0) {
      // 检查到为0 移动数据
      const len = nums.length - index
      for (let j = i; j < len; j++) {
        if (j !== len - 1) {
          nums[j] = nums[j + 1]
        }
      }
      nums[len - 1] = 0
      index++
      i--
    }
  }
};



// 双指针解法
function moveZeroes(nums: number[]): void {
  let last = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[last++] = nums[i]
    }
  }
  for (let i = last; i < nums.length; i++) {
    nums[i] = 0
  }
};

const nums = [0, 0, 1]
moveZeroes(nums)

console.log(nums)
export default moveZeroes