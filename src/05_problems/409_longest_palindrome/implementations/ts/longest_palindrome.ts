export const longestPalindrome = (s: string): number => {
  // accumulate pairs key/value for letters appearance in the string
  const map = new Map();

  // iterate string s over i
  for (let i = 0; i < s.length; i++) {
    // add current character appearance to the count
    const currentChar = s[i];
    const currentValue = map.get(currentChar);
    map.set(s[i], currentValue ? currentValue + 1 : 1);
  }

  // get an array of characters appearances
  const charAppearancesToArray = [...map.values()];

  const accumulator = {
    length: 0,
    center: 0,
  };

  // reduce character appearances and accumulate over total length, and center item
  const reduced = charAppearancesToArray.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      acc.length += curr;
    } else {
      acc.length += curr - 1;
      acc.center = 1;
    }

    return acc;
  }, accumulator);

  return reduced.length + reduced.center;
};
