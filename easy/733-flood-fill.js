'use strict';

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
  const scolor = image[sr][sc];
  const maxRow = image.length - 1;
  const maxCol = image[0].length - 1;

  if (scolor === color) return image;

  function _floodFillDFS(row, col, color) {
    if (image[row][col] !== scolor) return;

    image[row][col] = color;

    if (row > 0) _floodFillDFS(row-1, col, color);

    if (row < maxRow) _floodFillDFS(row+1, col, color);

    if (col > 0) _floodFillDFS(row, col-1, color);

    if (col < maxCol) _floodFillDFS(row, col+1, color);
  }

  _floodFillDFS(sr, sc, color);
  return image;
};