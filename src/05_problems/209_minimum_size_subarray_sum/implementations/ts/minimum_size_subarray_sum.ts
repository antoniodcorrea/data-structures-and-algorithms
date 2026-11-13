// Suboptimal solution: build prefix sum and iterate both array and possible subarrays O(n²+n);
export const minimumSizeSubarraySumSuboptimal = (array: Array<number>, target: number): number => {
  const n = array.length;
  const prefix = [0];

  for (let i = 1; i < n + 1; i++) {
    prefix[i] = prefix[i - 1] + array[i - 1];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const result = prefix[j + i + 1] - prefix[j];

      if (result >= target) {
        return i + 1;
      }
    }
  }

  return 0;
};

// Using sliding variable window: O(n).
export const minimumSizeSubarraySumOptimal = (array: Array<number>, target: number): number => {
  let left = 0;
  let right: number;
  let sum = 0; // Subarray sum window.
  let windowLength = Infinity; // Best subarray length window.

  for (right = 0; right < array.length; right++) {
    // Add the current value to sum window.
    sum += array[right];

    // If we do not comply with the condition (`sum >= target`), skip —and continue adding values to the sum accumulator in next iteration—.
    while (sum >= target) {
      // Check array length (right - left + 1), and compare it with current windowLength length. Update with best value.
      const subArrayLength = right - left + 1;
      windowLength = Math.min(windowLength, subArrayLength);

      // Remove the previous value from current sum window
      sum -= array[left];
      // Increase left pointer.
      left++;
    }
  }

  // We iterated whole array: return best, or 0 if we do not have a subarray matching the condition
  return windowLength === Infinity ? 0 : windowLength;
};
