export const productExceptSelf = (nums: number[]): number[] => {
  // Accumulator for result
  const result = [];

  // Iterate nums and store products of items left of current number
  const productsLeft = [];
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    productsLeft[i] = left;
    left *= nums[i];
  }

  // Iterate nums backwards and store products of items right of current number
  const productsRight = [];
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    productsRight[i] = right;
    right *= nums[i];
  }

  // Product of both arrays
  for (let i = 0; i < productsLeft.length; i++) {
    result[i] = productsLeft[i] * productsRight[i];
  }

  return result;
};
