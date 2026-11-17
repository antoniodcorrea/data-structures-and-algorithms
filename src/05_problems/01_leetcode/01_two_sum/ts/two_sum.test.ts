import { twoSum } from './two_sum';


describe('twoSum', () => {
  test('Example 1 from LeetCode', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    const expectedResult = [0, 1];
    expect(result).toEqual(expectedResult);
  });

  test('Example 2 from LeetCode', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    const expectedResult = [1, 2];
    expect(result).toEqual(expectedResult);
  });

  test('Example 3 from LeetCode', () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    const expectedResult = [0, 1];
    expect(result).toEqual(expectedResult);
  });

  test('Returns correct indexes in O(n^2) time (example provided)', async () => {
    const nums = [2, 11, 15, 3, 1, 5, 11, 15, 6];
    const target = 9;
    const result = twoSum(nums, target);
    const expectedResult = [3, 8];
    expect(result).toEqual(expectedResult);
  });

  test('Works with negative numbers', () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8; // -3 + -5
    const result = twoSum(nums, target);
    const expectedResult = [2, 4];
    expect(result).toEqual(expectedResult);
  });

  test('Works with zero and negative', () => {
    const nums = [0, 4, -4, 10];
    const target = 0; // 4 + -4
    const result = twoSum(nums, target);
    const expectedResult = [1, 2];
    expect(result).toEqual(expectedResult);
  });

  test('Handles duplicates correctly (multiple possible answers) — expects first valid by scan order', () => {
    const nums = [1, 5, 5, 3];
    const target = 10; // 5 + 5 at indices 1 and 2
    const result = twoSum(nums, target);
    const expectedResult = [1, 2];
    expect(result).toEqual(expectedResult);
  });

  test('Minimal length array of 2 elements', () => {
    const nums = [100, -100];
    const target = 0;
    const result = twoSum(nums, target);
    const expectedResult = [0, 1];
    expect(result).toEqual(expectedResult);
  });

  test('Large values within constraints', () => {
    const nums = [1_000_000_000, -1_000_000_000, 2];
    const target = 0;
    const result = twoSum(nums, target);
    const expectedResult = [0, 1];
    expect(result).toEqual(expectedResult);
  });

  test('Non-sorted input with spread values', () => {
    const nums = [10, -3, 4, 7, 3, -7, 2];
    const target = 0; // -3 + 3 at indices 1 and 4
    const result = twoSum(nums, target);
    const expectedResult = [1, 4];
    expect(result).toEqual(expectedResult);
  });
});
