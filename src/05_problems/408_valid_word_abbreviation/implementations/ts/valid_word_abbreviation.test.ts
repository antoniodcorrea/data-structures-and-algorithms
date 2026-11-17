import { matcher } from './valid_word_abbreviation';

describe('maxSumDistinctSubArrays', () => {
  test('Returns correct result', () => {
    const result = matcher('datadog', 'datadog');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = matcher('datadogs', 'datadog');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = matcher('datadog', 'datadogs');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = matcher('3', 'abc');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = matcher('3', 'abcd');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = matcher('d3dog', 'datadog');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = matcher('d2a2g', 'datadog');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
});
