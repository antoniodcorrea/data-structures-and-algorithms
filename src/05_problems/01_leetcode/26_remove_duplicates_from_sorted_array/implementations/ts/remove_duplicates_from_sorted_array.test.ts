import { removeDuplicates } from './remove_duplicates_from_sorted_array';

describe('removeDuplicates', () => {
  test('Returns the correct result', () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);
    const expectedResult = 2;
    const expectedNums = [1, 2];

    expect(result).toEqual(expectedResult);
    expect(nums.slice(0, result)).toEqual(expectedNums);
  });

  test('Returns the correct result', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = removeDuplicates(nums);
    const expectedResult = 5;
    const expectedNums = [0, 1, 2, 3, 4];

    expect(result).toEqual(expectedResult);
    expect(nums.slice(0, result)).toEqual(expectedNums);
  });

  test('Returns the correct result', () => {
    const nums = [1];
    const result = removeDuplicates(nums);
    const expectedResult = 1;
    const expectedNums = [1];

    expect(result).toEqual(expectedResult);
    expect(nums.slice(0, result)).toEqual(expectedNums);
  });

  test('Returns the correct result', () => {
    const nums = [1, 2, 3, 4];
    const result = removeDuplicates(nums);
    const expectedResult = 4;
    const expectedNums = [1, 2, 3, 4];

    expect(result).toEqual(expectedResult);
    expect(nums.slice(0, result)).toEqual(expectedNums);
  });

  test('Returns the correct result', () => {
    const nums = [7, 7, 7, 7, 7];
    const result = removeDuplicates(nums);
    const expectedResult = 1;
    const expectedNums = [7];

    expect(result).toEqual(expectedResult);
    expect(nums.slice(0, result)).toEqual(expectedNums);
  });

  test('Returns the correct result', () => {
    const nums = [-100, -100, -50, 0, 0, 0, 100, 100];
    const result = removeDuplicates(nums);
    const expectedResult = 4;
    const expectedNums = [-100, -50, 0, 100];

    expect(result).toEqual(expectedResult);
    expect(nums.slice(0, result)).toEqual(expectedNums);
  });
});
