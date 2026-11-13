export const reverseIntegers = (x: number): number => {
  const INT_MAX = Math.pow(2, 31);

  let reversed = 0;
  let absoluteX = Math.abs(x);

  while (absoluteX !== 0) {
    const digit = absoluteX % 10;
    absoluteX = Math.floor(absoluteX / 10);

    // We have to check that the value we will compute, `reversed * 10 + digit`, is within bounds,
    // i.e.: reversed * 10 + digit < INT_MAX.
    // Solving this equality we obtain `reversed < (INT_MAX - digit) / 10`.
    if (reversed > Math.floor(INT_MAX - digit) / 10) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return x > 0 ? reversed : -reversed;
};
