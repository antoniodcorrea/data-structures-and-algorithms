import { maxSumDistinctSubArrays } from "./maximum_sum_of_distinct_subarrays_with_length_k";

describe("maxSumDistinctSubArrays", () => {
  test("Returns correct result", () => {
    const array = [1, 5, 4, 2, 9, 9, 1];
    const size = 3;
    const result = maxSumDistinctSubArrays(array, size);

    const expected_result = 15;

    expect(result).toEqual(expected_result);
  });

  test("Returns correct result", () => {
    const array = [4, 4, 4];
    const size = 3;
    const result = maxSumDistinctSubArrays(array, size);

    const expected_result = 0;

    expect(result).toEqual(expected_result);
  });

  test("Returns correct result", () => {
    const array = [1, 1, 2, 3, 4];
    const size = 2;
    const result = maxSumDistinctSubArrays(array, size);

    const expected_result = 7;

    expect(result).toEqual(expected_result);
  });
});
