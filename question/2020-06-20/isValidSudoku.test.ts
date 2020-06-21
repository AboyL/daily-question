// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。


// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 给定数独序列只包含数字 1-9 和字符 '.' 。
// 给定数独永远是 9x9 形式的。


// 可以考虑成多个函数
// 1 先判断 9行中有没有 重复数据
// 2 判断 9列中有没有重复数据



function isValidSudoku1(board: string[][]): boolean {
  function containsDuplicate(nums: string[]): boolean {
    const hash: {
      [props: string]: boolean
    } = {}
    for (let item of nums) {
      if (hash[item]) {
        return true
      }
      hash[item] = true
    }
    return false
  };

  // 判断行
  for (let nums of board) {
    const noDotNums = nums.filter(n => n !== '.')
    if (containsDuplicate(noDotNums)) {
      return false
    }
  }

  // 判断列
  for (let i = 0; i < 9; i++) {
    const noDotNums = [board[0][i], board[1][i], board[2][i],
    board[3][i], board[4][i], board[5][i],
    board[6][i], board[7][i], board[8][i]].filter(n => n !== '.')
    if (containsDuplicate(noDotNums)) {
      return false
    }
  }

  // 判断格子

  for (let i = 0; i < 9; i++) {
    const f = Math.floor(i / 3)
    const l = i % 3
    const noDotNums = [
      board[0 + f * 3][0 + l * 3], board[0 + f * 3][1 + l * 3], board[0 + f * 3][2 + l * 3],
      board[1 + f * 3][0 + l * 3], board[1 + f * 3][1 + l * 3], board[1 + f * 3][2 + l * 3],
      board[2 + f * 3][0 + l * 3], board[2 + f * 3][1 + l * 3], board[2 + f * 3][2 + l * 3]]
      .filter(n => n !== '.')
    if (containsDuplicate(noDotNums)) {
      return false
    }
  }

  return true
};


// hash解法


function isValidSudoku(board: string[][]): boolean {
  const rows: Map<string, string>[] = new Array(9).fill(0).map(v => new Map())
  const cols: Map<string, string>[] = new Array(9).fill(0).map(v => new Map())
  const boxs: Map<string, string>[] = new Array(9).fill(0).map(v => new Map())

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j]
      if (value !== '.') {
        // 检查行
        if (rows[i].get(value)) {
          return false
        }
        // 检查列
        if (cols[j].get(value)) {
          return false
        }
        // 检查box
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (boxs[boxIndex].get(value)) {
          return false
        }
        rows[i].set(value, Math.random() + '')
        cols[j].set(value, value)
        boxs[boxIndex].set(value, value)
      }
    }
  }
  return true
};

test('isValidSudoku', () => {
  expect(isValidSudoku(
    [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
  )).toBeTruthy()

  expect(isValidSudoku(
    [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
  )).toBeFalsy()


})