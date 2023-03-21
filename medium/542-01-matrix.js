'use strict';

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// DP Approach:
function updateMatrix(mat) {
  let m = mat.length;
  let n = mat[0].length;

  // First pass looks at top and left neighbours only
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== 0) {
        mat[i][j] = Math.min(
          i > 0 ? mat[i-1][j] + 1 : Infinity,
          j > 0 ? mat[i][j-1] + 1 : Infinity
        );
      }
    }
  }

  // Second pass looks at bottom and right neighbours, as well as itself
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mat[i][j] !== 0) {
        mat[i][j] = Math.min(
          mat[i][j],
          i < m - 1 ? mat[i+1][j] + 1 : Infinity,
          j < n - 1 ? mat[i][j+1] + 1 : Infinity
        );
      }
    }
  }

  return mat;
}

// BFS Approach:
// function updateMatrix(mat) {
//   const neighborOffsets = [
//     [-1, 0],
//     [0, -1],
//     [0, 1],
//     [1, 0]
//   ];

//   let m = mat.length;
//   let n = mat[0].length;
//   let distances = [];
//   let queue = [];
//   let seen = new Set();

//   for (let i = 0; i < m; i++) {
//     distances.push([]);
//     for (let j = 0; j < n; j++) {
//       distances[i].push(mat[i][j] === 0 ? 0 : undefined);

//       if (mat[i][j] === 0) {
//         queue.push([i, j]);
//         seen.add(`${i}-${j}`);
//       }
//     }
//   }

//   while (queue.length) {
//     const [row, col] = queue.shift();
//     const val = distances[row][col];

//     for (let [dx, dy] of neighborOffsets) {
//       const newRow = row + dx;
//       const newCol = col + dy;

//       if (!seen.has(`${newRow}-${newCol}`)
//         && newRow >= 0
//         && newRow < m
//         && newCol >= 0
//         && newCol < n) {

//         seen.add(`${newRow}-${newCol}`);
//         distances[newRow][newCol] = val + 1;
//         queue.push([newRow, newCol]);

//       }
//     }
//   }

//   return distances;
// };