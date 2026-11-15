import { missingNumber } from './missing_number';

describe('missingNumber', () => {
  test('Returns the correct result', () => {
    const nums = [3, 0, 1];
    const result = missingNumber(nums);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0, 1];
    const result = missingNumber(nums);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    const result = missingNumber(nums);
    const expectedResult = 8;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1];
    const result = missingNumber(nums);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [0];
    const result = missingNumber(nums);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });
});
