export const wiggleMaxLength = (nums: number[]): number => {
  const elements = [];

  for (let i = 0; i < nums.length; i++) {
    const last = elements[elements.length - 1];
    const current = nums[i];

    // Same value, ignore it
    if (elements.length >= 1 && last === current) {
      continue;
    }

    // Check if item added in previous iteration and the element before it differ in direction.
    // If not, remove this item added in previous iteration.
    if (elements.length >= 2) {
      const lastGreaterThanItsPrevious = last > elements[elements.length - 2];
      const currentGreaterThanLast = current > last;

      if (lastGreaterThanItsPrevious === currentGreaterThanLast) {
        elements.pop();
      }
    }

    // Add item of current iteration
    elements.push(current);
  }

  return elements.length;
};
