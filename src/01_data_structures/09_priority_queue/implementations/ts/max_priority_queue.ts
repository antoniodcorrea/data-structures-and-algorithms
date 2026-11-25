import { extractMax, insertMax } from '../../../06_tree/02_heap/implementations/ts/max_heap';

export class MaxPriorityQueue {
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
    insertMax(this.items, value);
  }

  dequeue(): number | null {
    return extractMax(this.items);
  }
}
