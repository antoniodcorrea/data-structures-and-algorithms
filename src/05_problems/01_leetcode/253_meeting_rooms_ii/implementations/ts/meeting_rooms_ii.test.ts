import { minMeetingRooms, minMeetingRoomsHeap } from './meeting_rooms_ii';

describe('minMeetingRooms', () => {
  test('Returns correct result', () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [4, 5],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
  test('Returns correct result', () => {
    const intervals = [
      [0, 40],
      [5, 10],
      [15, 20],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [[4, 9]];
    const result = minMeetingRooms(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals: number[][] = [];
    const result = minMeetingRooms(intervals);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [7, 10],
      [2, 4],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 8],
      [8, 10],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [8, 10],
      [0, 8],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 5],
      [1, 5],
      [1, 5],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 10],
      [2, 9],
      [3, 8],
      [4, 7],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [4, 7],
      [1, 10],
      [3, 8],
      [2, 9],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 4],
      [2, 5],
      [4, 6],
      [5, 7],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 10],
      [0, 5],
      [5, 10],
      [10, 15],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [10, 20],
      [11, 20],
      [12, 20],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 1000000],
      [999999, 1000000],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 1],
      [0, 1000000],
      [1, 2],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [9, 10],
      [4, 9],
      [4, 17],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [2, 11],
      [6, 16],
      [11, 16],
    ];
    const result = minMeetingRooms(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
  //
  // test('Returns correct result', () => {
  //   const intervals = [
  //     [1, 5],
  //     [8, 9],
  //     [8, 9],
  //   ];
  //   const result = minMeetingRooms(intervals);
  //   const expectedResult = 2;
  //
  //   expect(result).toEqual(expectedResult);
  // });
  //
  // test('Returns correct result', () => {
  //   const intervals = Array.from({ length: 100000 }, (_, i) => [i, i + 1]);
  //   const result = minMeetingRooms(intervals);
  //   const expectedResult = 1;
  //
  //   expect(result).toEqual(expectedResult);
  // });
});

describe('minMeetingRoomsHeap', () => {
  test('Returns correct result', () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [4, 5],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
  test('Returns correct result', () => {
    const intervals = [
      [0, 40],
      [5, 10],
      [15, 20],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [[4, 9]];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals: number[][] = [];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [7, 10],
      [2, 4],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 8],
      [8, 10],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [8, 10],
      [0, 8],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 5],
      [1, 5],
      [1, 5],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 10],
      [2, 9],
      [3, 8],
      [4, 7],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [4, 7],
      [1, 10],
      [3, 8],
      [2, 9],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 4],
      [2, 5],
      [4, 6],
      [5, 7],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 10],
      [0, 5],
      [5, 10],
      [10, 15],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [10, 20],
      [11, 20],
      [12, 20],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 1000000],
      [999999, 1000000],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [0, 1],
      [0, 1000000],
      [1, 2],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [9, 10],
      [4, 9],
      [4, 17],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const intervals = [
      [2, 11],
      [6, 16],
      [11, 16],
    ];
    const result = minMeetingRoomsHeap(intervals);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });
  //
  // test('Returns correct result', () => {
  //   const intervals = [
  //     [1, 5],
  //     [8, 9],
  //     [8, 9],
  //   ];
  //   const result = minMeetingRoomsHeap(intervals);
  //   const expectedResult = 2;
  //
  //   expect(result).toEqual(expectedResult);
  // });
  //
  // test('Returns correct result', () => {
  //   const intervals = Array.from({ length: 100000 }, (_, i) => [i, i + 1]);
  //   const result = minMeetingRoomsHeap(intervals);
  //   const expectedResult = 1;
  //
  //   expect(result).toEqual(expectedResult);
  // });
});
