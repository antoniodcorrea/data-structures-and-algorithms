// O(n²)
export const numberOfSubarrays = (nums: number[], k: number): number => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let odds = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] % 2 !== 0) odds++;
      if (odds === k) result++;
    }
  }

  return result;
};
