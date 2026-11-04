export const wiggleMaxLength = (nums: number[]): number => {
  const acc = [];

  for (let i = 0; i < nums.length; i++) {
    const last = acc[acc.length - 1];
    const curr = nums[i];

    if (last === curr) continue;

    const lastGoesUp = last > acc[acc.length - 2];
    const currGoesUp = curr > last;

    if (acc.length >= 2 && lastGoesUp === currGoesUp) acc.pop();

    acc.push(curr);
  }

  return acc.length;
};
