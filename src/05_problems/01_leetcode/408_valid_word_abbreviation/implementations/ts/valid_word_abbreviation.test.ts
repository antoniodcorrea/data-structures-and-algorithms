import { validWordAbbreviation } from './valid_word_abbreviation';

describe('validWordAbbreviation', () => {
  test('Returns correct result', () => {
    const result = validWordAbbreviation('datadog', 'datadog');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('datadog', 'datadogs');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('datadogs', 'datadog');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('abc', '3');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('abcd', '3');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('datadog', 'd3dog');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('datadog', 'd2a2g');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('internationalization', 'i12iz4n');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('apple', 'a2e');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('substitution', 's10n');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('substitution', '12');
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('substitution', 's010n');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('substitution', 's0ubstitution');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('a', '2');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('a', '01');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const result = validWordAbbreviation('a', 'a999999999');
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });
});
