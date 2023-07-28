/**
 * Given an array of intervals, merge all overlaps and return an array of
 * non-overlapping intervals that cover the same values
 *
 * @param intervals - Array of intervals
 *
 * @returns - Array of non-overlapping intervals
 */

function merge(intervals: number[][]): number[][] {
  const merged: number[][] = [];

  // Sort array so we only have to worry about handling the interval ends
  // For example we won't have to worry about whether the upcoming interval
  // should replace the start of the current interval
  intervals.sort((a, b) => a[0] - b[0]);

  let [currentStart, currentEnd] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (end <= currentEnd) {
      // Falls within current
      continue;
    } else if (start > currentEnd) {
      // Does not overlap with current
      merged.push([currentStart, currentEnd]);
      currentStart = start;
      currentEnd = end;
    } else {
      // Overlaps with current
      currentEnd = end;
    }
  }

  merged.push([currentStart, currentEnd]);

  return merged;
}
