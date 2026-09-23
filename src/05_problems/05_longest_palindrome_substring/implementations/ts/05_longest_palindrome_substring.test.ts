import {
  _test,
  longestPalindromeSubstringOptimal,
  longestPalindromeSubstringSuboptimal,
} from './05_longest_palindrome_substring';

describe('findBiggestPalindromeFromSubstring', () => {
  test('Returns the correct result', () => {
    const string = 'a';
    const result = _test.findBiggestPalindromeFromSubstring(string, 0, 0);
    const expectedResult = [0, 0];

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'aa';
    const result = _test.findBiggestPalindromeFromSubstring(string, 0, 1);
    const expectedResult = [0, 1];

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'abb';
    const result = _test.findBiggestPalindromeFromSubstring(string, 1, 1);
    const expectedResult = [1, 1];

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'abba';
    const result = _test.findBiggestPalindromeFromSubstring(string, 1, 2);
    const expectedResult = [0, 3];

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'xabba';
    const result = _test.findBiggestPalindromeFromSubstring(string, 2, 3);
    const expectedResult = [1, 4];

    expect(result).toEqual(expectedResult);
  });
});

describe('longestPalindromeSubstringOptimal', () => {
  test('Returns the correct result', () => {
    const string = 'xabba';
    const result = longestPalindromeSubstringOptimal(string);
    const expectedResult = 'abba';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abccba';
    const result = longestPalindromeSubstringOptimal(string);
    const expectedResult = 'abccba';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'a';
    const result = longestPalindromeSubstringOptimal(string);
    const expectedResult = 'a';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abb';
    const result = longestPalindromeSubstringOptimal(string);
    const expectedResult = 'bb';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abcacbd';
    const result = longestPalindromeSubstringOptimal(string);
    const expectedResult = 'bcacb';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abcacbd';
    const result = longestPalindromeSubstringOptimal(string);
    const expectedResult = 'bcacb';

    expect(result).toEqual(expectedResult);
  });
});

describe('isPalindrome', () => {
  test('Returns the correct result', () => {
    const string = 'a';
    const result = _test.isPalindrome(string);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'aa';
    const result = _test.isPalindrome(string);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'aba';
    const result = _test.isPalindrome(string);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
});

describe('longestPalindromeSubstringSuboptimal', () => {
  test('Returns the correct result', () => {
    const string = 'a';
    const result = longestPalindromeSubstringSuboptimal(string);
    const expectedResult = 'a';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abb';
    const result = longestPalindromeSubstringSuboptimal(string);
    const expectedResult = 'bb';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abcacbd';
    const result = longestPalindromeSubstringSuboptimal(string);
    const expectedResult = 'bcacb';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abcacbd';
    const result = longestPalindromeSubstringSuboptimal(string);
    const expectedResult = 'bcacb';

    expect(result).toEqual(expectedResult);
  });
});
