export const missingNumber = (nums: number[]): number => {
  // sort numbers
  nums.sort((a, b) => a - b);

  // iterate i in nums
  for (let i = 0; i < nums.length; i++) {
    // if  number is not equal to previous
    if (nums[i] !== i) {
      // return index
      return i;
    }
  }

  // return length of n
  return nums.length;
};
