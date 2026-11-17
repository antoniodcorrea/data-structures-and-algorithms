import { productExceptSelf } from './product_of_array_except_self';

describe('productExceptSelf', () => {
  test('Returns the correct result', () => {
    const nums = [1, 2, 3, 4];
    const result = productExceptSelf(nums);
    const expectedResult = [24, 12, 8, 6];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [-1, 1, 0, -3, 3];
    const result = productExceptSelf(nums);
    const expectedResult = [0, 0, 9, 0, 0];

    expect(result.map((n) => n + 0)).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2, 3];
    const result = productExceptSelf(nums);
    const expectedResult = [3, 2];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0, 0, 2, 3];
    const result = productExceptSelf(nums);
    const expectedResult = [0, 0, 0, 0];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 1, 1, 1];
    const result = productExceptSelf(nums);
    const expectedResult = [1, 1, 1, 1, 1];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [-2, -3, 4, 5];
    const result = productExceptSelf(nums);
    const expectedResult = [-60, -40, 30, 24];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [5, 0, 4];
    const result = productExceptSelf(nums);
    const expectedResult = [0, 20, 0];

    expect(result).toEqual(expectedResult);
  });
});
