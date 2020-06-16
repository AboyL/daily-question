// 给定一个整数数组，判断是否存在重复元素。

// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

function containsDuplicate0(nums: number[]): boolean {
  const newArr = new Set(nums)
  return !(newArr.size === nums.length)
};

function containsDuplicate1(nums: number[]): boolean {
  const hash: {
    [props: number]: boolean
  } = {}
  for (let item of nums) {
    if (hash[item]) {
      return true
    }
    hash[item] = true
  }
  return false
};

function containsDuplicate2(nums: number[]): boolean {

  nums.sort((a, b) => a > b ? 1 : -1)
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.length - 1) {
      if (nums[i] === nums[i + 1]) {
        return true
      }
    }
  }
  return false

};

function containsDuplicate3(nums: number[]): boolean {
  const hash: {
    [props: number]: boolean
  } = {}
  for (let item of nums) {
    if (hash[item]) {
      return true
    }
    hash[item] = true
  }
  return false
};

const containsDuplicate = containsDuplicate3

export default containsDuplicate