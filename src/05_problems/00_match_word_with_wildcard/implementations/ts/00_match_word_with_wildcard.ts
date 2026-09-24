export function matcher(pattern: string, data: string): boolean {
  let patternIndex = 0;
  let k = 0;

  for (let targetIndex = 0; targetIndex < data.length; targetIndex++) {
    const patternNumber = Number.parseInt(pattern[patternIndex], 10);
    const isNumber = !Number.isNaN(patternNumber);

    if (isNumber) {
      k = patternNumber;
      patternIndex++;
    }

    while (k > 0) {
      targetIndex++;
      k--;
    }

    if (targetIndex === data.length) {
      break;
    }

    if (pattern[patternIndex] !== data[targetIndex]) {
      return false;
    }

    patternIndex++;

  }

  return patternIndex === pattern.length;
}
