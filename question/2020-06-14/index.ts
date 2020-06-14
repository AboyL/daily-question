// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 题解
// 一遍遍历 但是要进行回溯
// 什么时候买入股票 先假定此时已经买入了股票了 在后续中 只要出现比当前价格要高的股票价格i 且 下一个元素i+1不比i大
// 此时可以进行一手操作
// 假如一直没有 则不进行买入卖出操作
// 注意 中间的时间段
//  7 1 9 1 6 其实是有两个时间段进行股票的买买的 当买了一个股票以后 应该将指针进行偏移
function maxProfit(prices: number[]): number {
  let count = 0
  let current = prices[0]
  for (let i of prices) {
    if (i < current) {
      current = i
    }
    if (i > current) {
      count += (i - current)
      current = i
    }
  }
  return count
};

console.log(
  maxProfit(
    [7, 1, 9, 1, 6]

  )
)
export default maxProfit