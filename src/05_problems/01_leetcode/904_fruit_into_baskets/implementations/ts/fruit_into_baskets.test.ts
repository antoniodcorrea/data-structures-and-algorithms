import { fruitsIntoBaskets } from './fruit_into_baskets';

describe('fruitsIntoBaskets', () => {
  test('Returns the correct result', () => {
    const fruits = [1];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [1, 2];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [1, 2, 1];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [0, 1, 2, 2];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [1, 2, 3, 2, 2];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 5;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [1, 1, 1, 1];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [1, 2, 1, 2, 1, 2, 1, 2];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 8;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const fruits = [1, 2, 3, 4, 5];
    const result = fruitsIntoBaskets(fruits);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
});
