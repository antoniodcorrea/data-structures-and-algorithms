import { longestSubstringLengthWithoutRepeatingCharacters } from './longest_substring_without_repeating_characters';

describe('longestSubstringWithoutRepeatingCharacters', () => {
  test('Returns the correct result', () => {
    const array = 'abcabcbb';
    const result = longestSubstringLengthWithoutRepeatingCharacters(array);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const array = 'aab';
    const result = longestSubstringLengthWithoutRepeatingCharacters(array);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const array = 'pwwkew';
    const result = longestSubstringLengthWithoutRepeatingCharacters(array);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });
});
