// O(n·m)
export function longestCommonPrefixOptimal(strs: string[]): string {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return result;
    }
    result += strs[0][i];
  }

  return result;
}
