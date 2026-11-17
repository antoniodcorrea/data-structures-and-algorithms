import { containerMostWater } from "./container_most_water";


describe("ContainerMostWater", () => {
  test("Finds the container with most water", () => {
    const array = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = containerMostWater(array);

    expect(result).toBe(49);
  });
});
