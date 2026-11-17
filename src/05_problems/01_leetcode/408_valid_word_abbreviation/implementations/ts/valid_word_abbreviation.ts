export function validWordAbbreviation(data: string, pattern: string): boolean {
  let patternIndex = 0;

  for (let targetIndex = 0; targetIndex < data.length; targetIndex++) {
    const patternNumber = Number.parseInt(pattern[patternIndex], 10);
    const isNumber = !Number.isNaN(patternNumber);

    if (isNumber) {
      if (patternNumber === 0) return false;

      const k = Number.parseInt(pattern.slice(patternIndex), 10);
      patternIndex += String(k).length;
      targetIndex += k;
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
