// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// hash表
function singleNumber1(nums: number[]): number {
  const hash: {
    [props: number]: number
  } = {}
  for (let item of nums) {
    if (hash[item] === undefined) {
      hash[item] = 0
    } else {
      hash[item] += 1
    }
  }
  for (let i in hash) {
    if (hash[i] === 0) {
      return Number(i)
    }
  }
  return 0
};

// 异或运算
// 利用重复数字一定出现两次来求解
function singleNumber2(nums: number[]): number {
  let n = 0
  for (let num of nums) {
    n ^= num
  }
  return n
};

const singleNumber = singleNumber2

export default singleNumber
