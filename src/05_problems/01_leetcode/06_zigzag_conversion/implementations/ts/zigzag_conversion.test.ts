import { zigzagConversion } from './zigzag_conversion';


describe('zigzagConversion', () => {
  test('Returns the correct result', () => {
    const string = 'A';
    const result = zigzagConversion(string, 1);
    const expectedResult = 'A';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'AB';
    const result = zigzagConversion(string, 1);
    const expectedResult = 'AB';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'AB';
    const result = zigzagConversion(string, 2);
    const expectedResult = 'AB';

    expect(result).toEqual(expectedResult);
  });
  //
  test('Returns the correct result', () => {
    const string = 'ABC';
    const result = zigzagConversion(string, 2);
    const expectedResult = 'ACB';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'ABC';
    const result = zigzagConversion(string, 3);
    const expectedResult = 'ABC';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'PAYPALISHIRING';
    const result = zigzagConversion(string, 3);
    const expectedResult = 'PAHNAPLSIIGYIR';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'PAYPALISHIRING';
    const result = zigzagConversion(string, 4);
    const expectedResult = 'PINALSIGYAHRPI';

    expect(result).toEqual(expectedResult);
  });
});
