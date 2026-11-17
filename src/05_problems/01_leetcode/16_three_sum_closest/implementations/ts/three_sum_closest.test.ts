import { threeSumClosestOptimal } from './three_sum_closest';

describe('threeSumClosest', () => {
  test('Returns the correct result', () => {
    const nums = [-1, 2, 1, -4];
    const target = 1;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0, 0, 0];
    const target = 1;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 1, 0];
    const target = -100;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 2, 3, 4];
    const target = 6;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 6;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [-5, -2, -1, -10];
    const target = -7;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = -8;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [-1, 1, 1, 0];
    const target = 0;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1000, -1000, 2, -2, 5];
    const target = 3;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2, -1, 0];
    const target = 1;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 1, 1];
    const target = 3;
    const result = threeSumClosestOptimal(nums, target);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });
});
