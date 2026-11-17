import { reverseIntegers } from './reverse_integers';

describe('reverseIntegers', () => {
  test('Returns the correct result', () => {
    const input = 123;
    const result = reverseIntegers(input);
    const expectedResult = 321;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const input = -123;
    const result = reverseIntegers(input);
    const expectedResult = -321;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const input = -120;
    const result = reverseIntegers(input);
    const expectedResult = -21;

    expect(result).toEqual(expectedResult);
  });

  test('Returns 0 when result overflows 32-bit integer', () => {
    const input = 1534236469;
    const result = reverseIntegers(input);

    expect(result).toBe(0);
  });
});
