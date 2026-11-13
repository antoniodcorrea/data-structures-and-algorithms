export const isValidParentheses = (s: string): boolean => {
  const charsMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!!stack.length && stack[stack.length - 1] === charsMap[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
