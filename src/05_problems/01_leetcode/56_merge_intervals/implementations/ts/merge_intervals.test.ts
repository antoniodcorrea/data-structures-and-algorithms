import { mergeIntervals } from './merge_intervals';

describe('mergeIntervals', () => {
  test('Returns correct result', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 4],
      [4, 5],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 5]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [4, 7],
      [1, 4],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 7]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [[1, 4]];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 4]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [[0, 0]];
    const result = mergeIntervals(intervals);
    const expectedResult = [[0, 0]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [5, 6],
      [1, 2],
      [3, 4],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 10],
      [2, 3],
      [4, 5],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 10]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [2, 3],
      [4, 5],
      [1, 10],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 10]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 4],
      [1, 4],
      [1, 4],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 4]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 4],
      [1, 6],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 6]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 5],
      [3, 5],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 5]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 4],
      [0, 0],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [
      [0, 0],
      [1, 4],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 0],
      [0, 3],
      [5, 5],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [
      [0, 3],
      [5, 5],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 3],
      [3, 5],
      [5, 7],
      [7, 9],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 9]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [2, 3],
      [4, 6],
      [5, 7],
      [3, 4],
      [10, 12],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [
      [2, 7],
      [10, 12],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 10],
      [2, 3],
      [9, 12],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[1, 12]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 10000],
      [9999, 10000],
    ];
    const result = mergeIntervals(intervals);
    const expectedResult = [[0, 10000]];

    expect(result).toEqual(expectedResult);
  });
});
