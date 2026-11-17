import { isPalindromeOptimal } from './palindrome_number';

describe('isPalindrome', () => {
  test('Example 1: 121 -> true', () => {
    const x = 121;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Example 2: -121 -> false', () => {
    const x = -121;
    const result = isPalindromeOptimal(x);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Example 3: 10 -> false', () => {
    const x = 10;
    const result = isPalindromeOptimal(x);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Single digit is always a palindrome', () => {
    const x = 7;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Zero is a palindrome', () => {
    const x = 0;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Ends with 0 but not 0 itself -> not a palindrome', () => {
    const x = 100;
    const result = isPalindromeOptimal(x);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Even length palindrome', () => {
    const x = 1221;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Odd length palindrome', () => {
    const x = 12321;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Not a palindrome', () => {
    const x = 123;
    const result = isPalindromeOptimal(x);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Palindrome with zeros inside', () => {
    const x = 1001;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Large palindrome within 32-bit range', () => {
    const x = 2147447412;
    const result = isPalindromeOptimal(x);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Largest 32-bit signed int is not a palindrome', () => {
    const x = 2147483647;
    const result = isPalindromeOptimal(x);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });
});
