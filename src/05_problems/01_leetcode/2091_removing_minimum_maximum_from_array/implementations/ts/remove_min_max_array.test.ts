import { removeMinMaxArray } from './remove_min_max_array';

describe('removeMinMaxArray', () => {
  test('Returns the correct result', () => {
    const nums = [2, 10, 7, 5, 4, 1, 8, 6];
    const result = removeMinMaxArray(nums);
    const expectedResult = 5;
    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0, -4, 19, 1, 8, -2, -3, 5];
    const result = removeMinMaxArray(nums);
    const expectedResult = 3;
    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [101];
    const result = removeMinMaxArray(nums);
    const expectedResult = 1;
    expect(result).toEqual(expectedResult);
  });

  test('Min and max at the end of the array', () => {
    const nums = [5, 3, 1, 2, 4];
    const result = removeMinMaxArray(nums);
    const expectedResult = 3;
    expect(result).toEqual(expectedResult);
  });

  test('Min and max at both ends', () => {
    const nums = [1, 5, 3, 2, 6];
    const result = removeMinMaxArray(nums);
    const expectedResult = 2;
    expect(result).toEqual(expectedResult);
  });

  test('Min and max at both ends', () => {
    const nums = [
      -1, -53, 93, -42, 37, 94, 97, 82, 46, 42, -99, 56, -76, -66, -67, -13, 10, 66, 85, -28,
    ];
    const result = removeMinMaxArray(nums);
    const expectedResult = 11;
    expect(result).toEqual(expectedResult);
  });
});
