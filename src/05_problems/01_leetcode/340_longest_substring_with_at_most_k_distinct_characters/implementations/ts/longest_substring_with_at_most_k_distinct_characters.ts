export const longestSubstringWithAtMostKDistinctCharacters = (s: string, k: number): number => {
  // Characters counter in map
  const map = new Map();
  let i = 0; // Left window side
  let result = 0;

  // Right window side
  for (let j = 0; j < s.length; j++) {
    // Mem new character
    map.set(s[j], map.get(s[j]) + 1 || 1);

    // Limit distinct characters size by k
    while (map.size > k) {
      map.set(s[i], map.get(s[i]) - 1); // Decrease last character saved counter
      if (map.get(s[i]) === 0) map.delete(s[i]); // If no more characters, remove it
      i++; // Move left window side
    }

    // Select window size or result
    result = Math.max(result, j + 1 - i);
  }

  return result;
};
