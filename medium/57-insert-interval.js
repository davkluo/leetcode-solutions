'use strict';

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  // Base case for empty intervals
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }

  const [newStart, newEnd] = newInterval;

  // Binary search for index where interval should be
  const startInsertIdx = _binarySearch(intervals, newStart, 0);
  const endInsertIdx = _binarySearch(intervals, newEnd, 1);

  // Check if we need to merge
  let numIntervalsToDelete = endInsertIdx - startInsertIdx;
  let mergeStart = false;
  let mergeEnd = false;

  if (startInsertIdx > 0 && newStart <= intervals[startInsertIdx - 1][1]) {
    mergeStart = true;
  }

  if (endInsertIdx < intervals.length && newEnd >= intervals[endInsertIdx][0]) {
    mergeEnd = true;
  }

  if (mergeStart && mergeEnd) {
    numIntervalsToDelete++;
    intervals[startInsertIdx - 1][1] = intervals[endInsertIdx][1];
    intervals.splice(startInsertIdx, numIntervalsToDelete);
  } else {
    if (mergeStart) {
      intervals[startInsertIdx - 1][1] = Math.max(intervals[startInsertIdx - 1][1], newEnd);
    }

    if (mergeEnd) {
      intervals[endInsertIdx][0] = Math.min(intervals[endInsertIdx][0], newStart);
    }

    intervals.splice(startInsertIdx, numIntervalsToDelete);

    if (!mergeStart && !mergeEnd) {
      intervals.splice(startInsertIdx, 0, newInterval);
    }
  }

  return intervals;

  function _binarySearch(intervals, target, index) {
    let l = 0;
    let r = intervals.length - 1;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const midVal = intervals[mid][index];
      const nextVal = intervals?.[mid + 1]?.[index] || Infinity;

      if (target >= midVal && target <= nextVal) {
        return mid + 1;
      }

      if (target >= midVal) l = mid + 1;
      if (target <= midVal) r = mid - 1;
    }

    return l;
  }
};