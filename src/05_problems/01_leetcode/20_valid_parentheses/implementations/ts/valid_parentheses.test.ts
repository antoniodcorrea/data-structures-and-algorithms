import { isValidParentheses } from './valid_parentheses';

describe('isValidParentheses', () => {
  test('Returns the correct result', () => {
    const source = '()';
    const result = isValidParentheses(source);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '()[]{}';
    const result = isValidParentheses(source);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '(]';
    const result = isValidParentheses(source);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '([)]';
    const result = isValidParentheses(source);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '{[]}';
    const result = isValidParentheses(source);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '(';
    const result = isValidParentheses(source);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '(((((((((())))))))))';
    const result = isValidParentheses(source);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '([{}])';
    const result = isValidParentheses(source);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '((({{[[]]}})))()[]{}';
    const result = isValidParentheses(source);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const source = '((({{[[]]}})))(]';
    const result = isValidParentheses(source);
    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });
});
