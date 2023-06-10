'use strict';

const EMPTY = 0;
const FRESH = 1;
const ROTTEN = 2;

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Find cells with rotten oranges and put them in a queue with structure:
  //  queue = [{ row: number, col: number, turn: number }]
  // At the same time, create a count of how many fresh oranges there are
  let rottingQueue = [];
  let numFresh = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === FRESH) {
        numFresh++;
      } else if (grid[i][j] === ROTTEN) {
        rottingQueue.push({row: i, col: j, turn: 0})
      }
    }
  }

  // Guard: If there are no fresh oranges return 0
  if (numFresh === 0) return 0;

  // Guard: If there are no rotten oranges return -1
  if (rottingQueue.length === 0) return -1;

  // While the rotten oranges queue is not empty:
  while (rottingQueue.length > 0) {
    //  - Dequeue a rotten orange cell and its turn (essentially timeElapsed)
    const { row, col, turn } = rottingQueue.shift();

    //  - Change each of its fresh neighbors to rotten and enqueue them
    //  - Decrement the count of fresh oranges accordingly
    if (row > 0 && grid[row - 1][col] === FRESH) {
      grid[row - 1][col] = ROTTEN;
      numFresh--;
      rottingQueue.push({row: row - 1, col: col, turn: turn + 1});
    }
    if (row < m - 1 && grid[row + 1][col] === FRESH) {
      grid[row + 1][col] = ROTTEN;
      numFresh--;
      rottingQueue.push({row: row + 1, col: col, turn: turn + 1});
    }
    if (col > 0 && grid[row][col - 1] === FRESH) {
      grid[row][col - 1] = ROTTEN;
      numFresh--;
      rottingQueue.push({row: row, col: col - 1, turn: turn + 1});
    }
    if (col < n - 1 && grid[row][col + 1] === FRESH) {
      grid[row][col + 1] = ROTTEN;
      numFresh--;
      rottingQueue.push({row: row, col: col + 1, turn: turn + 1});
    }

    //` - If the count of fresh oranges hits 0, return the turn + 1
    if (numFresh === 0) return turn + 1
  }

  // At the end, if there are fresh oranges left return -1
  if (numFresh > 0) return -1
}