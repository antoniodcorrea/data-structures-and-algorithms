import { fourSum } from './4sum';

describe('fourSum', () => {
  test('Returns the correct result', () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const result = fourSum(nums, 0);
    const expectedResult = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2, 2, 2, 2, 2];
    const result = fourSum(nums, 8);
    const expectedResult = [[2, 2, 2, 2]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0, 0, 0, 0];
    const result = fourSum(nums, 0);
    const expectedResult = [[0, 0, 0, 0]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 2, 3];
    const result = fourSum(nums, 6);
    const expectedResult: number[][] = [];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [-3, -1, 0, 2, 4, 5];
    const result = fourSum(nums, 0);
    const expectedResult = [[-3, -1, 0, 4]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1000000000, 1000000000, 1000000000, 1000000000];
    const result = fourSum(nums, 4000000000);
    const expectedResult = [[1000000000, 1000000000, 1000000000, 1000000000]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0, 0, 0, 0, 0, 0];
    const result = fourSum(nums, 0);
    const expectedResult = [[0, 0, 0, 0]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [-2, -1, -1, 1, 1, 2, 2];
    const result = fourSum(nums, 0);
    const expectedResult = [
      [-2, -1, 1, 2],
      [-1, -1, 1, 1],
    ];

    expect(result).toEqual(expectedResult);
  });
});
