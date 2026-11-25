import { extractMin, insertMin, minHeap, minHeapify, parent } from "./min_heap";

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

describe("minHeapify()", () => {
  test("heapify moves the smallest child up", async () => {
    //          5←
    //        /  \
    //       1    3
    const array = [5, 1, 3];
    minHeapify(array, 0, array.length);

    expect(array).toEqual([1, 5, 3]);
  });
});

describe("minHeap()", () => {
  test("builds the heap correctly", async () => {
    const array = [3, 5, 1, 4, 2, 10];
    minHeap(array);
    //       1
    //     /  \
    //    2    3
    //   / \  /
    //  4  5 10
    expect(array).toEqual([1, 2, 3, 4, 5, 10]);
  });
});

describe("insertMin()", () => {
  test("inserts a value into the heap correctly", async () => {
    const array = [2, 4, 3, 9];
    insertMin(array, 1);
    //          1
    //        /  \
    //       2    3
    //      / \
    //     9  4
    expect(array).toEqual([1, 2, 3, 9, 4]);
  });
});

describe("extractMin()", () => {
  test("extracts the minimum from the heap correctly", async () => {
    const array = [1, 2, 3, 9, 4];
    const minValue = extractMin(array);
    //          2
    //        /  \
    //       4    3
    //      /
    //     9
    expect(minValue).toEqual(1);
    expect(array).toEqual([2, 4, 3, 9]);
  });
});
