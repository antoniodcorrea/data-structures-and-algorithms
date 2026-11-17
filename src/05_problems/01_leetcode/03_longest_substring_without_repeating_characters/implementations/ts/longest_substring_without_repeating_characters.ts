export const longestSubstringLengthWithoutRepeatingCharacters = (s: string): number => {
  let longestSubstringLength = 0; // Result accumulator.
  let map = new Map(); // Indexer for present chars in O(1) retrieval.
  let left = 0; // Left window side.

  // Iterate string once
  for (let right = 0; right < s.length; right++) {
    // While string already has current character, remove the first one and shrink window from left.
    while (map.has(s[right])) {
      map.delete(s[left]);
      left++;
    }

    // Window has shrunk until no repetitions occur:
    // Save new character into the map, and update the counter.
    map.set(s[right], right);
    longestSubstringLength = Math.max(map.size, longestSubstringLength);
  }

  return longestSubstringLength;
};
