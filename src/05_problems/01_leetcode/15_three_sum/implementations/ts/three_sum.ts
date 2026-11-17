// Brute force, O³
export const threeSumSuboptimal = (nums: number[]): number[][] => {
  const visited = new Map();
  const triplets = [];

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
          triplets.push(result);
        }
      }
    }
  }

  return triplets;
};

// Optimal, O(n²)
export const threeSumOptimal = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const triplets = [];

  // Fix item by item
  for (let i = 0; i < nums.length; i++) {
    // if item same as previous, skip to avoid duplicates
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // two pointers approach
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      // If sum is greater than 0, we need smaller numbers, move k pointer
      if (sum > 0) {
        k--;
        // If sum is smaller than 0, we need greater numbers, move j pointer
      } else if (sum < 0) {
        j++;
      } else {
        // Item found, save and move j pointer
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;

        // To avoid repetitions, if next item is the same, move j pointer again.
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return triplets;
};
