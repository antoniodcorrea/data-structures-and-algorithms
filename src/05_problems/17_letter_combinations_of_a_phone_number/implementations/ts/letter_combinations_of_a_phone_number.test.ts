import { letterCombinations } from './letter_combinations_of_a_phone_number';

describe('letterCombinations', () => {
  test('Returns the correct result', () => {
    const digits = '';
    const result = letterCombinations(digits);
    const expectedResult: string[] = [];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '2';
    const result = letterCombinations(digits);
    const expectedResult = ['a', 'b', 'c'];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '9';
    const result = letterCombinations(digits);
    const expectedResult = ['w', 'x', 'y', 'z'];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '7';
    const result = letterCombinations(digits);
    const expectedResult = ['p', 'q', 'r', 's'];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '23';
    const result = letterCombinations(digits);
    const expectedResult = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '79';
    const result = letterCombinations(digits);
    const expectedResult = [
      'pw',
      'px',
      'py',
      'pz',
      'qw',
      'qx',
      'qy',
      'qz',
      'rw',
      'rx',
      'ry',
      'rz',
      'sw',
      'sx',
      'sy',
      'sz',
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '88';
    const result = letterCombinations(digits);
    const expectedResult = ['tt', 'tu', 'tv', 'ut', 'uu', 'uv', 'vt', 'vu', 'vv'];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '234';
    const result = letterCombinations(digits);
    const expectedResult = [
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const digits = '6';
    const result = letterCombinations(digits);
    const expectedResult = ['m', 'n', 'o'];

    expect(result).toEqual(expectedResult);
  });
});
