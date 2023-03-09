'use strict';

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) {
      return 1;
    }

    let l = 1;
    let r = n;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);

      if (isBadVersion(mid)) {
        if (isBadVersion(mid - 1)) {
          r = mid - 1;
        } else {
          return mid;
        }
      } else {
        l = mid + 1;
      }
    }
  };
};