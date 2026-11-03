import { wiggleMaxLength } from './376_wiggle_subsequence';

describe('wiggleMaxLength', () => {
  test('Returns the correct result', () => {
    const nums = [1, 7, 4, 9, 2, 5];
    const result = wiggleMaxLength(nums);
    const expectedResult = 6;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
    const result = wiggleMaxLength(nums);
    const expectedResult = 7;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [44];
    const result = wiggleMaxLength(nums);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = wiggleMaxLength(nums);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32];
    const result = wiggleMaxLength(nums);
    const expectedResult = 8;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [
      374, 40, 854, 203, 203, 156, 362, 279, 812, 955, 600, 947, 978, 46, 100, 953, 670, 862, 568,
      188, 67, 669, 810, 704, 52, 861, 49, 640, 370, 908, 477, 245, 413, 109, 659, 401, 483, 308,
      609, 120, 249, 22, 176, 279, 23, 22, 617, 462, 459, 244,
    ];
    const result = wiggleMaxLength(nums);
    const expectedResult = 36;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [5, 5, 5, 5];
    const result = wiggleMaxLength(nums);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [9, 8, 7, 6, 5];
    const result = wiggleMaxLength(nums);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
});
