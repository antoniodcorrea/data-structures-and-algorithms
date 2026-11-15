export const removeDuplicates = (nums: number[]): number => {
  // pointer to last unique item placed
  let i = 0;

  // Iterate over nums with j
  for (let j = 0; j < nums.length; j++) {
    // if current item is equal to last unique item, continue
    if (nums[i] === nums[j]) continue;

    // otherwise increase i to advance to next repeated item
    i++;
    // replace the repeated with newly found unique item
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // return i plus one to get the length of subset of unique items
  return i + 1;
};
