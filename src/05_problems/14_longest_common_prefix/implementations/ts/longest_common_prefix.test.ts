import {
  longestCommonPrefixOptimal,
  longestCommonPrefixSubOptimal,
} from './longest_common_prefix';

describe('longestCommonPrefixSubOptimal', () => {
  test('Returns the correct result', () => {
    const result = longestCommonPrefixSubOptimal(['flower', 'flow', 'flight']);
    const expectedResult = 'fl';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixSubOptimal(['dog', 'racecar', 'car']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefixSubOptimal(['interspecies', 'interstellar', 'interstate']);
    const expectedResult = 'inters';

    expect(result).toEqual(expectedResult);
  });
});

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
});
