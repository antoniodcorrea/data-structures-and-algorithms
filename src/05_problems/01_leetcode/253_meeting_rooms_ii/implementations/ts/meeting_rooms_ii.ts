import { MinPriorityQueue } from './minPriorityQueue';

// Two pointers: compares each start with the earliest end whose room has not been reused yet.
// Time: O(n log n). Space: O(n).
export const minMeetingRooms = (intervals: number[][]): number => {
  const starts = intervals.map((item) => item[0]).sort((a, b) => a - b);
  const ends = intervals.map((item) => item[1]).sort((a, b) => a - b);

  let rooms = 0;
  let j = 0; // ends

  for (let i = 0; i < starts.length; i++) {
    const isRoomFree = ends[j] <= starts[i];
    if (isRoomFree) {
      j++;
      continue;
    }
    rooms++;
  }

  return rooms;
};

// Min heap: keeps the end time of the last meeting in each allocated room, with the earliest at the front.
// Time: O(n log n). Space: O(n).
export const minMeetingRoomsHeap = (intervals: number[][]): number => {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const roomEndTimes = new MinPriorityQueue();

  for (let i = 0; i < sorted.length; i++) {
    const start = sorted[i][0];
    const end = sorted[i][1];

    const isRoomFree = !roomEndTimes.isEmpty() && roomEndTimes.front() <= start;
    if (isRoomFree) {
      roomEndTimes.dequeue();
    }

    roomEndTimes.enqueue(end);
  }

  return roomEndTimes.size();
};
