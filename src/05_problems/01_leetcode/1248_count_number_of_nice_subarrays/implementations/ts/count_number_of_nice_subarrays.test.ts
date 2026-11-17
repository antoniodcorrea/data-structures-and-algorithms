import { numberOfSubarrays } from './count_number_of_nice_subarrays';

describe('numberOfSubarrays', () => {
  test('Returns the correct result', () => {
    const nums = [1, 1, 2, 1, 1];
    const k = 3;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2, 4, 6];
    const k = 1;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
    const k = 2;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 16;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1];
    const k = 1;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2];
    const k = 1;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 1, 1];
    const k = 1;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 1, 1];
    const k = 2;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 1, 1];
    const k = 4;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [2, 1, 2];
    const k = 1;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 2, 1, 2, 1];
    const k = 2;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const nums = [1, 1, 2, 1, 1];
    const k = 5;
    const result = numberOfSubarrays(nums, k);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });
});
