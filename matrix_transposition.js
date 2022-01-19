// [1, 2]       [1, 3, 5]
// [3, 4] ===>  [2, 4, 6]
// [5, 6]
//want to turn the columns into the rows

const transpose = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
      grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[j][i] = matrix[i][j];
      }
    }
    return grid;
  };





// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
      for (const el of row) {
          process.stdout.write(el + " ");
      }
      process.stdout.write('\n')
  }
}

printMatrix(transpose([
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
[1, 2],
[3, 4],
[5, 6]
]));

console.log('----')

printMatrix(transpose([
[1, 2, 3, 4, 5, 6, 7]
]));