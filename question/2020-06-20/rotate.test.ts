// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度。

// 说明：

// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。


// 暴力求解找出公式
function rotate0(matrix: number[][]): void {

  const len = matrix.length
  const other: number[][] = new Array(len).fill(0).map(v => { return [] })
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 最重要的公式
      other[j][len - i - 1] = matrix[i][j]
    }
  }

  for (let i of other) {
    matrix.shift()
    matrix.push(i)
  }
};

// 使用以前用过记忆位置的办法来求解
// 一样需要开辟临时空间 不好
function rotate(matrix: number[][]): void {
  const len = matrix.length
  const hash: {
    [props: string]: boolean
  } = {}
  for (let col = 0; col < len; col++) {

    for (let row = 0; row < len; row++) {
      if (hash[`${col}-${row}`]) {
        continue
      }
      let currentCol = col
      let currentRow = row
      let prev = matrix[currentCol][currentRow]
      do {
        hash[`${currentCol}-${currentRow}`] = true
        const tem = matrix[currentRow][len - currentCol - 1]
        matrix[currentRow][len - currentCol - 1] = prev
        prev = tem
        const temCol = currentCol
        currentCol = currentRow
        currentRow = len - temCol - 1

      } while (currentCol !== col || currentRow !== row)
    }
  }
};

test('rotate', () => {

  // const matrix_1 =
  //   [
  //     [1, 2],
  //     [3, 4],
  //   ]
  // rotate(matrix_1)
  // expect(matrix_1).toEqual(
  //   [
  //     [3, 1],
  //     [4, 2],
  //   ]
  // )

  const matrix0 =
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  rotate(matrix0)
  expect(matrix0).toEqual(
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]
  )

  const matrix1 =
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  rotate(matrix1)
  expect(matrix1).toEqual(
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
  )

  const matrix2 =
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ]
  rotate(matrix2)
  expect(matrix2).toEqual(
    [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11]
    ]
  )
})