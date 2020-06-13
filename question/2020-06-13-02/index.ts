// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 递归加上备忘录
// const hashMap: {
//   [propName: number]: number;
// } = {
//   1: 1,
//   2: 2
// }
// function climbStairs(n: number): number {
//   if (hashMap[n]) {
//     return hashMap[n]
//   }
//   const result = climbStairs(n - 1) + climbStairs(n - 2)
//   hashMap[n] = result
//   return result
// };

// 动态规划

function climbStairs(n: number): number {
  let p1 = 0
  let p2 = 0
  let r = 1

  for (let i = 1; i <= n; i++) {
    p1 = p2
    p2 = r
    r = p1 + p2
  }
  return r
};

console.log(
  climbStairs(4)
)
export default climbStairs