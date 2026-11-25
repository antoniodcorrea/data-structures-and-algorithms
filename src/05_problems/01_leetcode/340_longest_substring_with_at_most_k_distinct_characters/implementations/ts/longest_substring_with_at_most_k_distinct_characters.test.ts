import { longestSubstringWithAtMostKDistinctCharacters } from './longest_substring_with_at_most_k_distinct_characters';

describe('longestSubstringWithAtMostKDistinctCharacters', () => {
  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('eceba', 2);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('aa', 1);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('a', 1);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('a', 0);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abc', 0);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abc', 1);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abc', 3);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abc', 5);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('aabbcc', 1);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('aabbcc', 2);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abaccc', 2);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abcadcacacaca', 3);
    const expectedResult = 11;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('aaabbbbcc', 2);
    const expectedResult = 7;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abababab', 2);
    const expectedResult = 8;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('abcddddd', 2);
    const expectedResult = 6;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = longestSubstringWithAtMostKDistinctCharacters('aaaaabcd', 1);
    const expectedResult = 5;

    expect(result).toEqual(expectedResult);
  });
});
