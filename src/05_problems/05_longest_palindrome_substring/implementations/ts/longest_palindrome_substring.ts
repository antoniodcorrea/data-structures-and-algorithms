// O(n)
const findLongestPalindromeFromCenter = (s: string, left: number, right: number): string => {
  // while left and right are within bounds, and s[left] is equal to s[right]
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    // decrease left
    left--;
    // increase right
    right++;
  }

  // return last substring from s that matched
  return s.substring(left + 1, right);
};

// O(n²)
export const longestPalindromeSubstringOptimal = (s: string): string => {
  let result = '';

  // iterate i over s
  for (let i = 0; i < s.length; i++) {
    // var oddPalindromicSubstring is longest palindromic substring of s with i as center: odd
    const oddPalindromicSubstring = findLongestPalindromeFromCenter(s, i, i);
    // var evenPalindromicSubstring is longest palindromic substring of s with i and i + 1 as center: even
    const evenPalindromicSubstring = findLongestPalindromeFromCenter(s, i, i + 1);
    // if oddPalindromicSubstring is longer than result accumulator, replace it
    result = oddPalindromicSubstring.length > result.length ? oddPalindromicSubstring : result;
    // if evenPalindromicSubstring is longer than result accumulator, replace it
    result = evenPalindromicSubstring.length > result.length ? evenPalindromicSubstring : result;
  }

  return result;
};

// ---------------------

// O(n)
const isPalindrome = (string: string) => {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// Suboptimal, O(n³)
export const longestPalindromeSubstringSuboptimal = (string: string): string => {
  let longestPalindrome = '';

  // O(n)
  for (let i = 0; i < string.length; i++) {
    // O(n)
    for (let j = 0; j < string.length; j++) {
      const currentString = string.substring(i, j + 1);

      const itIsPalindrome = isPalindrome(currentString);
      if (itIsPalindrome && longestPalindrome.length < currentString.length) {
        longestPalindrome = currentString;
      }
    }
  }

  return longestPalindrome;
};

export const _test = { isPalindrome, findLongestPalindromeFromCenter };
