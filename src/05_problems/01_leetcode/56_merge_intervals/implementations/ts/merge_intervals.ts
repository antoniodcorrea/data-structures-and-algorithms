export const mergeIntervals = (intervals: number[][]): number[][] => {
  const intervalsSorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const results = [intervalsSorted[0]];

  for (let i = 0; i < intervals.length; i++) {
    const lastResult = results[results.length - 1];
    const currentItem = intervalsSorted[i];

    if (currentItem[0] <= lastResult[1]) {
      results[results.length - 1][1] = Math.max(currentItem[1], lastResult[1]);
    } else {
      results.push(currentItem);
    }
  }

  return results;
};
