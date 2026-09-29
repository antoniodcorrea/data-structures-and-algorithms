import { findMedianSortedArrays } from './04_median_of_two_sorted_arrays';

describe('findMedianSortedArrays', () => {
  test('Returns the correct result', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 2.5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [] as number[];
    const nums2 = [1];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [2];
    const nums2 = [] as number[];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [0, 0];
    const nums2 = [0, 0];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 3.5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [4, 5, 6];
    const nums2 = [1, 2, 3];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 3.5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [1, 3, 5, 7];
    const nums2 = [2, 4, 6];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [1];
    const nums2 = [2, 3, 4, 5, 6];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 3.5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [-5, -3, -1];
    const nums2 = [-2, 0, 2];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = -1.5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [1, 1, 1];
    const nums2 = [1, 1, 1];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums1 = [-1000000];
    const nums2 = [1000000];
    const result = findMedianSortedArrays(nums1, nums2);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });
});
