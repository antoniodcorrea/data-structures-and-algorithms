import { extractMin, insertMin } from '../../../06_tree/02_heap/implementations/ts/min_heap';

export class MinPriorityQueue {
  private items: number[] = [];

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  front(): number | null {
    return this.isEmpty() ? null : this.items[0];
  }

  enqueue(value: number): void {
    insertMin(this.items, value);
  }

  dequeue(): number | null {
    return extractMin(this.items);
  }
}
