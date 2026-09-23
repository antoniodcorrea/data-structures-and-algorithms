// O(n)
const findBiggestPalindromeFromSubstring = (
  substring: string,
  left: number,
  right: number,
): [number, number] => {
  while (substring[left] && substring[right] && substring[left] === substring[right]) {
    left--;
    right++;
  }

  return [left + 1, right - 1];
};

// Optimal, O(n)
export const longestPalindromeSubstringOptimal = (string: string): string => {
  let accumulator = '';

  for (let i = 0; i < string.length; i++) {
    const [leftOdd, rightOdd] = findBiggestPalindromeFromSubstring(string, i, i);
    const [leftEven, rightEven] = findBiggestPalindromeFromSubstring(string, i, i + 1);
    const [left, right] =
      rightOdd - leftOdd > rightEven - leftEven ? [leftOdd, rightOdd] : [leftEven, rightEven];
    const palindrome = string.substring(left, right + 1);

    accumulator = palindrome?.length > accumulator.length ? palindrome : accumulator;
  }

  return accumulator;
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

export const _test = { isPalindrome, findBiggestPalindromeFromSubstring };
