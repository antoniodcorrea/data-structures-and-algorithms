export const generateParenthesis = (n: number): string[] => {
  // result accumulator
  const combinations = [];

  // recursively add open and close parentheses
  const createRecursiveCombination = (
    combination: string,
    openAdded: number,
    closeAdded: number,
  ) => {
    // base case: if we already added all open and close parentheses, return
    if (openAdded === n && closeAdded === n) {
      combinations.push(combination);

      return;
    }

    // if there are more open than close parentheses, add a close one
    if (openAdded > closeAdded)
      createRecursiveCombination(combination + ')', openAdded, closeAdded + 1);
    // if there are remaining open parentheses to add, add it
    if (openAdded < n) createRecursiveCombination(combination + '(', openAdded + 1, closeAdded);
  };

  // call recursive function with empty string and 0 added open and close parentheses
  createRecursiveCombination('', 0, 0);

  // return result
  return combinations;
};
