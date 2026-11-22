import { numberOfIslands } from './number_of_islands';

describe('numberOfIslands', () => {
  test('Returns correct result', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [['0']];
    const result = numberOfIslands(grid);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [['1']];
    const result = numberOfIslands(grid);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [
      ['1', '1', '1'],
      ['1', '1', '1'],
      ['1', '1', '1'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [
      ['1', '0', '1'],
      ['0', '1', '0'],
      ['1', '0', '1'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [['1', '0', '1', '0', '1', '1']];
    const result = numberOfIslands(grid);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [['1'], ['1'], ['0'], ['1']];
    const result = numberOfIslands(grid);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [
      ['1', '1', '1'],
      ['0', '1', '0'],
      ['1', '1', '1'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const grid = [
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '0', '1'],
      ['1', '0', '1', '0', '1'],
      ['1', '0', '0', '0', '1'],
      ['1', '1', '1', '1', '1'],
    ];
    const result = numberOfIslands(grid);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
});
