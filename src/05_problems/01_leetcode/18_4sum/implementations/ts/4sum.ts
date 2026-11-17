export function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const result = [];

  // If no enough items, return
  if (n < 4) return result;

  for (let i = 0; i < n; i++) {
    // Prune at i
    const minI = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
    if (minI > target) break;
    const maxI = nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3];
    if (maxI < target) continue;

    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      // Prune at j
      const minJ = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];
      if (minJ > target) break;
      const maxJ = nums[i] + nums[j] + nums[n - 1] + nums[n - 2];
      if (maxJ < target) continue;
      // If duplicated from left side, skip
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        // If duplicated from right side, skip
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          k++;
          continue;
        }
        // If same element, skip
        if (i === j || i === k || i === l) {
          k++;
          continue;
        }
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
        }

        if (sum > target) {
          l--;
        } else {
          k++;
        }
      }
    }
  }

  return result;
}
