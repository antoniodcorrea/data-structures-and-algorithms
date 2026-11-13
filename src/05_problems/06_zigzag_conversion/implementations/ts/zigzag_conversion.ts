/* O(n)
 * Use an array of strings: each array item is a row, and each string item is a column.
 * We may ignore the zigzag, as finally we will read the rows continuously.
 */
export const zigzagConversion = (s: string, numRows: number): string => {
  if (numRows === 1) return s;

  const matrix = Array.from({ length: numRows }, () => []);
  let down = true;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    // Push char to row
    matrix[row].push(s[i]);

    // If first row, revert direction
    if (row === 0) {
      down = true;
    }

    // If last row, revert direction
    if (row === numRows - 1) {
      down = false;
    }

    if (down) {
      // Advance row pointer.
      row += 1;
    } else {
      row -= 1;
    }
  }

  const joinedColumns = matrix.map((item) => item.join(''));

  return joinedColumns.join('');
};
