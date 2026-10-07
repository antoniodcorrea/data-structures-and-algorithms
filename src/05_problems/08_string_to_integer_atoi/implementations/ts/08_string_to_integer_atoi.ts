const toUnicodeValue = (char: string): number => char.charCodeAt(0) - 48;
const isDigit = (chat: string): boolean => toUnicodeValue(chat) >= 0 && toUnicodeValue(chat) <= 9;

export const stringToInteger = (s: string): number => {
  const UPPER_BOUND = 2 ** 31 - 1;
  const LOWER_BOUND = -1 * 2 ** 31;

  const stringWithoutSpaces = s.trim();
  const isNegative = stringWithoutSpaces[0] === '-';
  const stringWithoutSign =
    stringWithoutSpaces[0] === '-' || stringWithoutSpaces[0] === '+'
      ? stringWithoutSpaces.slice(1)
      : stringWithoutSpaces;
  let leadingZeroes = true;
  let number = 0;

  for (let i = 0; i < stringWithoutSign.length; i++) {
    const unicodeValue = toUnicodeValue(stringWithoutSign[i]);
    const itIsDigit = isDigit(stringWithoutSign[i]);

    if (unicodeValue === 0 && leadingZeroes) {
      continue;
    }

    if (!itIsDigit) {
      break;
    }

    if (unicodeValue !== 0) {
      leadingZeroes = false;
    }

    number = number * 10 + unicodeValue;
  }

  const resultWithSign = isNegative ? number * -1 : number;
  const resultWithBounds =
    resultWithSign < LOWER_BOUND
      ? LOWER_BOUND
      : resultWithSign > UPPER_BOUND
        ? UPPER_BOUND
        : resultWithSign;

  return resultWithBounds;
};
