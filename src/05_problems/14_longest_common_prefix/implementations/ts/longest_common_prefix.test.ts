import { longestCommonPrefixOptimal } from './longest_common_prefix';

describe('longestCommonPrefixOptimal', () => {
  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['flower', 'flow', 'flight']);
    const expectedResult = 'fl';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['dog', 'racecar', 'car']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['interspecies', 'interstellar', 'interstate']);
    const expectedResult = 'inters';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['flow', 'flower']);
    const expectedResult = 'flow';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['alone']);
    const expectedResult = 'alone';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['abc', '', 'abd']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['same', 'same', 'same']);
    const expectedResult = 'same';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['flower', 'flow']);
    const expectedResult = 'flow';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['abc', 'xbc']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['ab', 'a', 'abc']);
    const expectedResult = 'a';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixOptimal(['b', 'a']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });
});
