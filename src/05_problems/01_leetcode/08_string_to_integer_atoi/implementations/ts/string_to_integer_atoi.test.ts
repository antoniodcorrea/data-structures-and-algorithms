import { stringToInteger } from './string_to_integer_atoi';

describe('stringToInteger (atoi)', () => {
  test('converts a simple positive number', () => {
    const input = '42';
    const result = stringToInteger(input);
    const expectedResult = 42;

    expect(result).toEqual(expectedResult);
  });

  test('ignores leading whitespace', () => {
    const input = '   42';
    const result = stringToInteger(input);
    const expectedResult = 42;

    expect(result).toEqual(expectedResult);
  });

  test('handles negative numbers', () => {
    const input = '-42';
    const result = stringToInteger(input);
    const expectedResult = -42;

    expect(result).toEqual(expectedResult);
  });

  test('handles positive sign', () => {
    const input = '+42';
    const result = stringToInteger(input);
    const expectedResult = 42;

    expect(result).toEqual(expectedResult);
  });

  test('stops parsing at first non-digit character', () => {
    const input = '4193 with words';
    const result = stringToInteger(input);
    const expectedResult = 4193;

    expect(result).toEqual(expectedResult);
  });

  test('returns 0 if string starts with non-numeric characters', () => {
    const input = 'words and 987';
    const result = stringToInteger(input);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('returns 0 if no digits are present', () => {
    const input = '+';
    const result = stringToInteger(input);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('handles leading zeros', () => {
    const input = '0000123';
    const result = stringToInteger(input);
    const expectedResult = 123;

    expect(result).toEqual(expectedResult);
  });

  test('clamps value to INT_MAX on overflow', () => {
    const input = '91283472332';
    const result = stringToInteger(input);
    const expectedResult = 2147483647;

    expect(result).toEqual(expectedResult);
  });

  test('clamps value to INT_MIN on underflow', () => {
    const input = '-91283472332';
    const result = stringToInteger(input);
    const expectedResult = -2147483648;

    expect(result).toEqual(expectedResult);
  });

  test('handles empty string', () => {
    const input = '';
    const result = stringToInteger(input);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('stops parsing at decimal point', () => {
    const input = '3.14159';
    const result = stringToInteger(input);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('handles whitespace, sign and leading zeros together', () => {
    const input = '   -042';
    const result = stringToInteger(input);
    const expectedResult = -42;

    expect(result).toEqual(expectedResult);
  });

  test('stops parsing at a letter followed by more digits', () => {
    const input = '1337c0d3';
    const result = stringToInteger(input);
    const expectedResult = 1337;

    expect(result).toEqual(expectedResult);
  });

  test('treats a sign after digits as a non-digit', () => {
    const input = '0-1';
    const result = stringToInteger(input);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('returns 0 when two signs are consecutive', () => {
    const input = '+-12';
    const result = stringToInteger(input);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('returns 0 for a whitespace-only string', () => {
    const input = '   ';
    const result = stringToInteger(input);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('returns INT_MAX exactly', () => {
    const input = '2147483647';
    const result = stringToInteger(input);
    const expectedResult = 2147483647;

    expect(result).toEqual(expectedResult);
  });

  test('returns INT_MIN exactly', () => {
    const input = '-2147483648';
    const result = stringToInteger(input);
    const expectedResult = -2147483648;

    expect(result).toEqual(expectedResult);
  });

  test('clamps INT_MAX + 1 to INT_MAX', () => {
    const input = '2147483648';
    const result = stringToInteger(input);
    const expectedResult = 2147483647;

    expect(result).toEqual(expectedResult);
  });

  test('clamps INT_MIN - 1 to INT_MIN', () => {
    const input = '-2147483649';
    const result = stringToInteger(input);
    const expectedResult = -2147483648;

    expect(result).toEqual(expectedResult);
  });

  test('does not overflow on many leading zeros', () => {
    const input = '00000000000000000000123';
    const result = stringToInteger(input);
    const expectedResult = 123;

    expect(result).toEqual(expectedResult);
  });
});
