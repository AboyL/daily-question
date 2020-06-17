// 给定两个数组，编写一个函数来计算它们的交集。

function intersect1(nums1: number[], nums2: number[]): number[] {
  const nums: number[] = []
  const hash1: {
    [props: number]: number
  } = {}
  // hash2是共有的
  const hash2: {
    [props: number]: number
  } = {}

  for (let i of nums1) {
    hash1[i] = hash1[i] === undefined ? 1 : hash1[i] + 1
  }
  for (let i of nums2) {
    if (hash1[i]) {
      hash2[i] = hash2[i] === undefined ? 1 : hash2[i] + 1
    }
  }
  for (let i in hash2) {
    const min = Math.min(hash1[i], hash2[i])
    for (let j = 0; j < min; j++) {
      nums.push(Number(i))
    }
  }

  return nums
};

function intersect2(nums1: number[], nums2: number[]): number[] {
  const nums: number[] = []
  const hash1: {
    [props: number]: number
  } = {}

  for (let i of nums1) {
    hash1[i] = hash1[i] === undefined ? 1 : hash1[i] + 1
  }
  for (let i of nums2) {
    if (hash1[i]) {
      nums.push(i)
      hash1[i] = hash1[i] - 1
    }
  }

  return nums
};

const intersect = intersect2

export default intersect