// O(n²)
export const threeSumClosestOptimal = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b);
  let distance = Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (i == j || i == k) continue;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];
      let difference = Math.abs(total - target);

      if (total < target) {
        j++;
      } else {
        k--;
      }

      if (difference < distance) {
        distance = difference;
        sum = total;
      }
    }
  }

  return sum;
};
