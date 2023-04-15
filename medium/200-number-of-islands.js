'use strict';

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let numberOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        convertLandToWater(i, j);
        numberOfIslands++;
      }
    }
  }

  function convertLandToWater(i, j) {
    grid[i][j] = '0';

    // Check if its neighbours are land, if they are convert those to water
    if (i > 0 && grid[i-1][j] === '1') convertLandToWater(i-1, j);
    if (j > 0 && grid[i][j-1] === '1') convertLandToWater(i, j-1);
    if (i < grid.length - 1 && grid[i+1][j] === '1') convertLandToWater(i+1, j);
    if (j < grid[0].length - 1 && grid[i][j+1] === '1') convertLandToWater(i, j+1);
  }

  return numberOfIslands;
};

/* APPROACH:
- Loop through the grid until we encounter a piece of land
- Recursively convert all connected pieces of land to water
- Increment the number of islands
- Continue looping until the entire grid is traversed
*/