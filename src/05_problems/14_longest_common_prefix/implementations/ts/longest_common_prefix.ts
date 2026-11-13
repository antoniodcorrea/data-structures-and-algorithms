export function longestCommonPrefixSubOptimal(strs: string[]): string {
  strs.sort();

  let smallestWord = strs[0];
  let currentChar = '';
  let longestPrefix = [];

  for (let char = 0; char < smallestWord.length; char++) {
    for (let word = 0; word < strs.length; word++) {
      if (word === 0) {
        currentChar = strs[word][char];
      }

      if (strs[word][char] !== currentChar) {
        return longestPrefix.join('');
      }

      if (word === strs.length - 1) {
        longestPrefix.push(strs[word][char]);
      }
    }
  }

  return longestPrefix.join('');
}

// O(n)
export function longestCommonPrefixOptimal(strs: string[]): string {
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];
  let prefix = [];

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix.push(first[i]);
    } else {
      break;
    }
  }

  return prefix.join('');
}
