import { threeSumOptimal, threeSumSuboptimal } from './three_sum';

describe('threeSumSuboptimal', () => {
  test('Returns the correct result', () => {
    const source = [-1, 0, 1, 2, -1, -4];
    const result = threeSumSuboptimal(source);
    const expectedResult = [
      [-1, 0, 1],
      [-1, -1, 2],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [0, 0, 0, 0];
    const result = threeSumSuboptimal(source);

    const expectedResult = [[0, 0, 0]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [0, 1, 1];
    const result = threeSumSuboptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [1, 2];
    const result = threeSumSuboptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [1, 2, 3, 4];
    const result = threeSumSuboptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-5, -4, -3, -2];
    const result = threeSumSuboptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-2, 0, 1, 1, 2];
    const result = threeSumSuboptimal(source);
    const expectedResult = [
      [-2, 0, 2],
      [-2, 1, 1],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-2, 0, 0, 2, 2];
    const result = threeSumSuboptimal(source);
    const expectedResult = [[-2, 0, 2]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-100000, 50000, 50000];
    const result = threeSumSuboptimal(source);
    const expectedResult = [[-100000, 50000, 50000]];

    expect(result).toEqual(expectedResult);
  });
});

describe('threeSumOptimal', () => {
  test('Returns the correct result', () => {
    const source = [-1, 0, 1, 2, -1, -4];
    const result = threeSumOptimal(source);
    const expectedResult = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [0, 0, 0, 0];
    const result = threeSumOptimal(source);

    const expectedResult = [[0, 0, 0]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [0, 1, 1];
    const result = threeSumOptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [1, 2];
    const result = threeSumOptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [1, 2, 3, 4];
    const result = threeSumOptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-5, -4, -3, -2];
    const result = threeSumOptimal(source);
    const expectedResult = [] as number[][];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-2, 0, 1, 1, 2];
    const result = threeSumOptimal(source);
    const expectedResult = [
      [-2, 0, 2],
      [-2, 1, 1],
    ];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-2, 0, 0, 2, 2];
    const result = threeSumOptimal(source);
    const expectedResult = [[-2, 0, 2]];

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = [-100000, 50000, 50000];
    const result = threeSumOptimal(source);
    const expectedResult = [[-100000, 50000, 50000]];

    expect(result).toEqual(expectedResult);
  });
});
