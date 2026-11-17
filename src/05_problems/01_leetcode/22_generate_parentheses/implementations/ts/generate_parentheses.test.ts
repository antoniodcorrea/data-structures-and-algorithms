import { generateParenthesis } from './generate_parentheses';

describe('generateParenthesis', () => {
  test('Returns the correct result', () => {
    const n = 3;
    const result = generateParenthesis(n);
    const expectedResult = ['((()))', '(()())', '(())()', '()(())', '()()()'];

    expect(result.sort()).toEqual(expectedResult.sort());
  });

  test('Returns the correct result', () => {
    const n = 1;
    const result = generateParenthesis(n);
    const expectedResult = ['()'];

    expect(result.sort()).toEqual(expectedResult.sort());
  });

  test('Returns the correct result', () => {
    const n = 2;
    const result = generateParenthesis(n);
    const expectedResult = ['(())', '()()'];

    expect(result.sort()).toEqual(expectedResult.sort());
  });

  test('Returns the correct result', () => {
    const n = 4;
    const result = generateParenthesis(n);
    const expectedResult = [
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()',
    ];

    expect(result.sort()).toEqual(expectedResult.sort());
  });

  test('Returns the correct number of combinations', () => {
    const n = 8;
    const result = generateParenthesis(n);
    const expectedResult = 1430;

    expect(result.length).toEqual(expectedResult);
  });
});
