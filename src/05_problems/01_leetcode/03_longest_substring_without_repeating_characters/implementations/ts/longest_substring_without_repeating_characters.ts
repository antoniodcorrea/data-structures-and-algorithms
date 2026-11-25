export const longestSubstringLengthWithoutRepeatingCharacters = (s: string): number => {
  const set = new Set(); // Indexer for present chars in O(1) retrieval.
  let i = 0; // Left window side.
  let longestSubstringLength = 0; // Result accumulator.

  for (let j = 0; j < s.length; j++) {
    // While string already has current character, remove the first one and shrink window from i.
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }

    set.add(s[j]); // Save new character into the set, and update the counter.
    longestSubstringLength = Math.max(j + 1 - i, longestSubstringLength); // Window size or length
  }

  return longestSubstringLength;
};
