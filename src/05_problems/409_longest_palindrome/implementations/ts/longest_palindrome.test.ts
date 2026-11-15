import { longestPalindrome } from './longest_palindrome';

describe('longestPalindrome', () => {
  test('Returns the correct result', () => {
    const s = 'abccccdd';
    const result = longestPalindrome(s);
    const expectedResult = 7;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const s = 'a';
    const result = longestPalindrome(s);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const s = 'Aa';
    const result = longestPalindrome(s);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const s = 'bb';
    const result = longestPalindrome(s);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const s = 'aaabbbccc';
    const result = longestPalindrome(s);
    const expectedResult = 7;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const s = 'abcdef';
    const result = longestPalindrome(s);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });
});
