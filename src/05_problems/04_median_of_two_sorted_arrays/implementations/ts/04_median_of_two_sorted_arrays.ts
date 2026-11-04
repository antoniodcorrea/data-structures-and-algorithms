export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const acc = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      acc.push(nums1[i]);
      i++;
    } else {
      acc.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) acc.push(nums1[i++]);
  while (j < nums2.length) acc.push(nums2[j++]);

  const even = acc.length % 2 === 0;
  const middle = Math.floor(acc.length / 2);

  if (even) {
    return (acc[middle - 1] + acc[middle]) / 2;
  } else {
    return acc[middle];
  }
};
