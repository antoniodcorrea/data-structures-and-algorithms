import { MaxPriorityQueue } from './max_priority_queue';

const createQueue = (values: number[]) => {
  const queue = new MaxPriorityQueue();
  values.forEach((value) => queue.enqueue(value));

  return queue;
};

const dequeueAll = (queue: MaxPriorityQueue) => {
  const result: number[] = [];
  while (!queue.isEmpty()) result.push(queue.dequeue());

  return result;
};

describe('new MaxPriorityQueue()', () => {
  test('Creates an empty queue', () => {
    const queue = new MaxPriorityQueue();

    expect(queue.isEmpty()).toEqual(true);
    expect(queue.size()).toEqual(0);
  });

  test('Creates independent queues', () => {
    const first = createQueue([1]);
    const second = new MaxPriorityQueue();

    expect(first.size()).toEqual(1);
    expect(second.size()).toEqual(0);
  });
});

describe('enqueue()', () => {
  test('Increases the size', () => {
    const queue = createQueue([3, 1, 2]);

    expect(queue.isEmpty()).toEqual(false);
    expect(queue.size()).toEqual(3);
  });

  test('Moves a new maximum to the front', () => {
    const queue = createQueue([9, 4, 3, 2]);
    queue.enqueue(10);

    expect(queue.front()).toEqual(10);
  });

  test('Keeps the front when the new value is smaller', () => {
    const queue = createQueue([5]);
    queue.enqueue(2);

    expect(queue.front()).toEqual(5);
  });
});

describe('front()', () => {
  test('Returns null when the queue is empty', () => {
    expect(new MaxPriorityQueue().front()).toBeNull();
  });

  test('Returns the maximum without removing it', () => {
    const queue = createQueue([3, 5, 4]);

    expect(queue.front()).toEqual(5);
    expect(queue.size()).toEqual(3);
  });
});

describe('dequeue()', () => {
  test('Returns null when the queue is empty', () => {
    expect(new MaxPriorityQueue().dequeue()).toBeNull();
  });

  test('Removes the only value', () => {
    const queue = createQueue([7]);

    expect(queue.dequeue()).toEqual(7);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Returns the values in descending order', () => {
    const queue = createQueue([8, 3, 6, 1, 9, 2, 7, 5, 4]);

    expect(dequeueAll(queue)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  test('Handles duplicated and negative values', () => {
    const queue = createQueue([2, -1, 2, 0, -1]);

    expect(dequeueAll(queue)).toEqual([2, 2, 0, -1, -1]);
  });

  test('Keeps the order when alternating with enqueue', () => {
    const queue = createQueue([1, 3]);

    expect(queue.dequeue()).toEqual(3);
    queue.enqueue(5);
    queue.enqueue(2);
    expect(dequeueAll(queue)).toEqual([5, 2, 1]);
  });
});
