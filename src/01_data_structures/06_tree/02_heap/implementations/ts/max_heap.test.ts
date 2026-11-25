import { extractMax, insertMax, maxHeap, maxHeapify, parent } from "./max_heap";

describe("parent()", () => {
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7←   4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5   0
    const parentIndex = parent(1);

    expect(parentIndex).toBe(0);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4←
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5   0
    const parentIndex = parent(2);

    expect(parentIndex).toBe(0);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6← 2 1   3
    //    / \
    //   5   0
    const parentIndex = parent(3);

    expect(parentIndex).toBe(1);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2←1   3
    //    / \
    //   5   0
    const parentIndex = parent(4);

    expect(parentIndex).toBe(1);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1←  3
    //    / \
    //   5   0
    const parentIndex = parent(5);

    expect(parentIndex).toBe(2);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3←
    //    / \
    //   5   0
    const result = parent(6);

    expect(result).toBe(2);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5←  0
    const result = parent(7);

    expect(result).toBe(3);
  });
  test("computes correct parent index for child index", async () => {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5   0←
    const result = parent(8);

    expect(result).toBe(3);
  });
});

describe("maxHeapify()", () => {
  test("heapify first non-leaf node", async () => {
    //          3
    //        /  \
    //       5    1←
    //      / \  / swap
    //     4  2 10
    const array = [3, 5, 1, 4, 2, 10];
    maxHeapify(array, 2, array.length);

    expect(array).toEqual([3, 5, 10, 4, 2, 1]);
  });
  test("heapify second non-leaf node, no changes", async () => {
    //          3
    //        /  \
    //       5←  10
    //   ok / \  /
    //     4  2 1

    const array = [3, 5, 10, 4, 2, 1];
    maxHeapify(array, 1, array.length);

    expect(array).toEqual([3, 5, 10, 4, 2, 1]);
  });
  test("heapify third non-leaf node", async () => {
    //         10←
    //        /  \ swap
    //       5    3
    //      / \  /
    //     4  2 1
    const array = [3, 5, 10, 4, 2, 1];
    maxHeapify(array, 0, array.length);

    expect(array).toEqual([10, 5, 3, 4, 2, 1]);
  });
});

describe("maxHeap()", () => {
  test("builds the heap correctly", async () => {
    const array = [3, 5, 1, 4, 2, 10];
    maxHeap(array);
    //      10
    //     /  \
    //    5    3
    //   / \  /
    //  4  2 1
    expect(array).toEqual([10, 5, 3, 4, 2, 1]);
  });
  test("builds the heap correctly", async () => {
    const array = [3, 5, 1, 4, 2];
    maxHeap(array);
    //       5
    //     /  \
    //    4    1
    //   / \
    //  3  2
    expect(array).toEqual([5, 4, 1, 3, 2]);
  });
  test("builds the heap correctly", async () => {
    const array = [0, 2, 4, 6, 8, 1, 3, 5, 7];
    maxHeap(array);
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5  0
    expect(array).toEqual([8, 7, 4, 6, 2, 1, 3, 5, 0]);
  });
});

describe("insertMax()", () => {
  test("inserts a value into the heap correctly", async () => {
    const array = [3, 2, 4, 1];
    maxHeap(array);
    //          4
    //        /  \
    //       2    3
    //      /
    //     1
    expect(array).toEqual([4, 2, 3, 1]);

    insertMax(array, 5);
    //          5
    //        /  \
    //       4    3
    //      / \
    //     1  2
    expect(array).toEqual([5, 4, 3, 1, 2]);
  });
});

describe("extractMax()", () => {
  test("extracts a value from the heap correctly", async () => {
    const array = [1, 2, 3, 4, 5];
    maxHeap(array);
    //          5
    //        /  \
    //       4    3
    //      / \
    //     1  2
    expect(array).toEqual([5, 4, 3, 1, 2]);

    const maxValue = extractMax(array);
    //          4
    //        /  \
    //       2    3
    //      /
    //     1
    expect(maxValue).toEqual(5);
    expect(array).toEqual([4, 2, 3, 1]);
  });
});
