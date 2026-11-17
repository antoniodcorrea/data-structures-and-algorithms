export function letterCombinations(digits: string): string[] {
  if (!digits?.length) return [];

  let accumulator: string[] = [null];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  for (let i = 0; i < digits.length; i++) {
    const row: string[] = [];

    for (let j = 0; j < accumulator.length; j++) {
      for (let k = 0; k < map[digits[i]].length; k++) {
        let result = !!accumulator[j] ? accumulator[j] + map[digits[i]][k] : map[digits[i]][k];
        row.push(result);
      }
    }

    accumulator = row;
  }

  return accumulator;
}
