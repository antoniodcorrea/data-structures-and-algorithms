export function validWordAbbreviation(data: string, pattern: string): boolean {
  let i = 0;
  let stepsToSkip = 0;

  for (let j = 0; j < pattern.length; j++) {
    const number = Number.parseInt(pattern[j], 10);

    if (!Number.isNaN(number)) {
      if (number === 0 && stepsToSkip === 0) return false;

      stepsToSkip = stepsToSkip * 10 + number;

      continue;
    }

    while (stepsToSkip) {
      stepsToSkip--;
      i++;
    }

    i++;
  }

  while (stepsToSkip) {
    stepsToSkip--;
    i++;
  }

  return i === data.length;
}
