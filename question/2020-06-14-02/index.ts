/**
Do not return anything, modify nums in-place instead.
 */
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 要求使用空间复杂度为 O(1) 的 原地 算法。

// 解法1
function rotate1(nums: number[], k: number): void {
  const len = nums.length
  const transfer = k % len
  if (k === 0 || transfer === 0) {
    return
  }
  let tem = 0
  for (let i = 0; i < transfer; i++) {
    tem = nums[len - 1]
    for (let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = tem
  }
};

// 可以将右转移变成左转移
function rotate2(nums: number[], k: number): void {
  const len = nums.length
  const transfer = k % len

  if (k === 0 || transfer === 0) {
    return
  }
  let tem = 0
  const transferDirection = (transfer < len / 2) ? 'right' : 'left'
  if (transferDirection === 'right') {
    for (let i = 0; i < transfer; i++) {
      tem = nums[len - 1]
      for (let j = len - 1; j > 0; j--) {
        nums[j] = nums[j - 1]
      }
      nums[0] = tem
    }
  } else {
    for (let i = 0; i < len - transfer; i++) {
      tem = nums[0]
      for (let j = 0; j < len - 1; j++) {
        nums[j] = nums[j + 1]
      }
      nums[len - 1] = tem
    }
  }
};


// 不考虑空间复杂度
function rotate3(nums: number[], k: number): void {
  const len = nums.length
  const transfer = k % len

  if (k === 0 || transfer === 0) {
    return
  }
  const temArr = nums.splice(len - transfer)
  for (let i = temArr.length - 1; i >= 0; i--) {
    const item = temArr[i]
    nums.unshift(item)
  }
};

// 3次反转
function rotate4(nums: number[], k: number): void {
  const len = nums.length
  const transfer = k % len

  if (k === 0 || transfer === 0) {
    return
  }
  const reversed = (arr: any[], start: number, end: number) => {
    // 原地翻转
    let t = 0
    while (start < end) {
      t = arr[start]
      arr[start] = arr[end]
      arr[end] = t
      start++
      end--
    }
  }
  reversed(nums, 0, len - 1)
  reversed(nums, 0, transfer - 1)
  reversed(nums, transfer, len - 1)
};


// 环形链
// 其实就是从一开始 大家就去自己需要去的位置上去 原本位置上的人进行缓存
// 第一轮 第一个同学A去k的位置上坐着
// 第二轮 原来的k的位置的同学去 2k的位置坐着 tem变成2k
// 第三轮
function rotate5(nums: number[], k: number): void {
  const len = nums.length
  k = k % len

  if (k === 0) {
    return
  }

  let count = 0;//已经替换了多少次 了 当次数跟len一样就表示替换完成了
  for (let start = 0; count < len; start++) {
    let current = start
    let prev = nums[start]
    do {
      const next = (k + current) % len
      const tem = nums[next]
      nums[next] = prev
      current = next
      count++
      prev = tem
    } while (start !== current)
  }

};

const rotate = rotate5

const arr4 = [1, 2, 3]
rotate(arr4, 2)
console.log(arr4)
export default rotate