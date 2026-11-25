import { MinPriorityQueue } from './min_priority_queue';

const createQueue = (values: number[]) => {
  const queue = new MinPriorityQueue();
  values.forEach((value) => queue.enqueue(value));

  return queue;
};

const dequeueAll = (queue: MinPriorityQueue) => {
  const result: number[] = [];
  while (!queue.isEmpty()) result.push(queue.dequeue());

  return result;
};

describe('new MinPriorityQueue()', () => {
  test('Creates an empty queue', () => {
    const queue = new MinPriorityQueue();

    expect(queue.isEmpty()).toEqual(true);
    expect(queue.size()).toEqual(0);
  });

  test('Creates independent queues', () => {
    const first = createQueue([1]);
    const second = new MinPriorityQueue();

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

  test('Moves a new minimum to the front', () => {
    const queue = createQueue([2, 4, 3, 9]);
    queue.enqueue(1);

    expect(queue.front()).toEqual(1);
  });

  test('Keeps the front when the new value is greater', () => {
    const queue = createQueue([2]);
    queue.enqueue(5);

    expect(queue.front()).toEqual(2);
  });
});

describe('front()', () => {
  test('Returns null when the queue is empty', () => {
    expect(new MinPriorityQueue().front()).toBeNull();
  });

  test('Returns the minimum without removing it', () => {
    const queue = createQueue([5, 3, 4]);

    expect(queue.front()).toEqual(3);
    expect(queue.size()).toEqual(3);
  });
});

describe('dequeue()', () => {
  test('Returns null when the queue is empty', () => {
    expect(new MinPriorityQueue().dequeue()).toBeNull();
  });

  test('Removes the only value', () => {
    const queue = createQueue([7]);

    expect(queue.dequeue()).toEqual(7);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Returns the values in ascending order', () => {
    const queue = createQueue([8, 3, 6, 1, 9, 2, 7, 5, 4]);

    expect(dequeueAll(queue)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('Handles duplicated and negative values', () => {
    const queue = createQueue([2, -1, 2, 0, -1]);

    expect(dequeueAll(queue)).toEqual([-1, -1, 0, 2, 2]);
  });

  test('Keeps the order when alternating with enqueue', () => {
    const queue = createQueue([5, 3]);

    expect(queue.dequeue()).toEqual(3);
    queue.enqueue(1);
    queue.enqueue(4);
    expect(dequeueAll(queue)).toEqual([1, 4, 5]);
  });
});
