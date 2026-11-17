export const removeMinMaxArray = (array: Array<number>): number => {
  if (array.length <= 2) return array.length;

  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  const indexOfMin = array.indexOf(min);
  const indexOfMax = array.indexOf(max);

  // The strategy is to evaluate the four possible outcomes: both from left, both from right, min from left max from
  // right, and min from right and max from left.
  // The lower value will be the correct answer.
  const bothFromLeft = Math.max(indexOfMin + 1, indexOfMax + 1);
  const bothFromRight = Math.max(array.length - indexOfMin, array.length - indexOfMax);
  const minLeftMaxRight = indexOfMin + 1 + (array.length - indexOfMax);
  const minRightMaxLeft = array.length - indexOfMin + (indexOfMax + 1);

  return Math.min(bothFromLeft, bothFromRight, minLeftMaxRight, minRightMaxLeft);
};
