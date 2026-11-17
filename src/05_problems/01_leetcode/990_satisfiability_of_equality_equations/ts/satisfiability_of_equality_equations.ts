export function equationsPossible(equations: Array<string>) {
  // Array to store the operands indexes.
  // As "a"'s charchode is 97, substract it to start at 0.
  const representatives: number[] = Array.from({ length: 26 }, (_, i) => i);

  // Link to the same root all the variables that are equal.
  for (const equation of equations) {
    if (equation.includes("==")) {
      const [leftOperand, rightOperand] = equation.split("==");
      const leftOperandCharcode = leftOperand.charCodeAt(0) - 97;
      const rightOperandCharcode = rightOperand.charCodeAt(0) - 97;

      union(leftOperandCharcode, rightOperandCharcode, representatives);
    }
  }

  // Check all the non-equal equations.
  // If both operands shares root, it is a contradiction.
  for (const equation of equations) {
    if (equation.includes("!=")) {
      const [leftOperand, rightOperand] = equation.split("!=");
      const leftOperandCharcode = leftOperand.charCodeAt(0) - 97;
      const rightOperandCharcode = rightOperand.charCodeAt(0) - 97;
      const leftOperandCharcodeRoot = findRoot(
        leftOperandCharcode,
        representatives
      );
      const rightOperandCharcodeRoot = findRoot(
        rightOperandCharcode,
        representatives
      );

      if (leftOperandCharcodeRoot === rightOperandCharcodeRoot) {
        return false;
      }
    }
  }

  return true;
}

function union(
  leftOperandCharcode: number,
  rightOperandCharcode: number,
  representatives: Array<number>
) {
  const leftOperandCharcodeRoot = findRoot(
    leftOperandCharcode,
    representatives
  );
  const rightOperandCharcodeRoot = findRoot(
    rightOperandCharcode,
    representatives
  );

  // If they have same root, they already are part of same group.
  if (leftOperandCharcodeRoot === rightOperandCharcodeRoot) return;

  // Otherwise, link the root of the right operand with the root of the left operand.
  representatives[leftOperandCharcodeRoot] = rightOperandCharcodeRoot;

  return;
}

// Gets the root of a node.
function findRoot(node: number, representatives: Array<number>) {
  // As root is a node whose value is equal to its parent, we can traverse any node using this inequality. Once both node and parent are equal, we know we are in a root.
  if (representatives[node] !== node) {
    representatives[node] = findRoot(representatives[node], representatives);
  }

  return representatives[node];
}
