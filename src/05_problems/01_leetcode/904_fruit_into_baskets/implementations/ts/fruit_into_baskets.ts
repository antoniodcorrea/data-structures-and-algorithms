export function fruitsIntoBaskets(fruits: Array<number>): number {
  let i = 0;
  let basket = new Map();
  let maxFruit = 0;

  for (let j = 0; j < fruits.length; j++) {
    basket.set(fruits[j], (basket.get(fruits[j]) || 0) + 1);

    while (basket.size > 2) {
      basket.set(fruits[i], basket.get(fruits[i]) - 1);

      if (basket.get(fruits[i]) === 0) {
        basket.delete(fruits[i]);
      }

      i++;
    }

    maxFruit = Math.max(maxFruit, j - i + 1);
  }

  return maxFruit;
}
