// Time: O(n) Space: O(1)
export const maxSumDistinctSubArrays = (array: number[], k: number): number => {
  let left = 0;
  let windowSum = 0;
  let maxSum = 0;
  const visited = new Set<number>();

  for (let right = 0; right < array.length; right++) {
    // ensure distinct: shrink until array[right] not in window
    while (visited.has(array[right])) {
      visited.delete(array[left]);
      windowSum -= array[left];
      left++;
    }

    // include array[right]
    visited.add(array[right]);
    windowSum += array[right];

    // keep window length ≤ k
    if (right - left + 1 > k) {
      visited.delete(array[left]);
      windowSum -= array[left];
      left++;
    }

    if (right - left + 1 === k && windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
};
