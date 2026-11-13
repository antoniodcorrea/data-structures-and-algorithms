// Brute force, O³
export const threeSumSuboptimal = (nums: number[]): number[][] => {
  const visited = new Map();
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i === j || i === k || j === k) {
          continue;
        }

        if (nums[i] + nums[j] + nums[k] === 0) {
          const result = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          const string = result.join(',');

          if (visited.has(string)) {
            continue;
          }

          visited.set(string, true);
          results.push(result);
        }
      }
    }
  }

  return results;
};

// Optimal, O(n²)
export const threeSumOptimal = (nums: number[]): number[][] => {
  const results = [];
  nums.sort((a, b) => a - b);

  // Fix item by item
  for (let i = 0; i < nums.length; i++) {
    // if item same as previous, skip to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // two pointers approach
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      // If total is greater than 0, we need smaller numbers, move right pointer
      if (total > 0) {
        right--;
        // If total is smaller than 0, we need greater numbers, move left pointer
      } else if (total < 0) {
        left++;
      } else {
        // Item found, save and move left pointer
        results.push([nums[i], nums[left], nums[right]]);
        left++;

        // To avoid repetitions, if next item is the same, move left pointer again.
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return results;
};
