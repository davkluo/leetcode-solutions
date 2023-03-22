'use strict';

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  points.sort(_comparator);

  return points.splice(0, k);

  function _comparator(a, b) {
      const [x1, y1] = a;
      const [x2, y2] = b;

      const dist1 = Math.sqrt(x1**2 + y1**2);
      const dist2 = Math.sqrt(x2**2 + y2**2);

      return dist1 - dist2;
  }
};