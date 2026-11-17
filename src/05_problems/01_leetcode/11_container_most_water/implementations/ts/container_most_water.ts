const calculateVolume = (
  firstItem: number,
  firstItemIndex: number,
  secondItem: number,
  secondItemIndex: number
): number => {
  const x = secondItemIndex - firstItemIndex;
  const y = Math.min(firstItem, secondItem);

  return x * y;
}

export function containerMostWater(array: Array<number>): number {
  let left = 0;
  let right = array.length - 1;
  let maxVolume = 0;

  while (left < right) {
    const volume = calculateVolume(array[left], left, array[right], right);

    if (volume > maxVolume) maxVolume = volume;

    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }

  }

  return maxVolume;
}
