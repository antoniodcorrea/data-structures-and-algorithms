export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  // Accumulator for merged arrays
  const acc = [];
  let i = 0;
  let j = 0;

  // merge arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      acc.push(nums1[i]);
      i++;
    } else {
      acc.push(nums2[j]);
      j++;
    }
  }

  // when one array is exhausted, add the rest to the other
  while (i < nums1.length) {
    acc.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    acc.push(nums2[j]);
    j++;
  }

  // get median properly (odd/even cases)
  const even = acc.length % 2 === 0;
  const medianIndex = Math.floor(acc.length / 2);

  if (even) {
    return (acc[medianIndex - 1] + acc[medianIndex]) / 2;
  } else {
    return acc[medianIndex];
  }
};
