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
    this.items.push(value);
    this.siftUp(this.items.length - 1);
  }

  dequeue(): number | null {
    if (this.isEmpty()) return null;

    this.swap(0, this.items.length - 1);
    const min = this.items.pop();
    this.siftDown(0);

    return min;
  }

  private siftUp(index: number): void {
    const parent = Math.floor((index - 1) / 2);

    if (index > 0 && this.items[index] < this.items[parent]) {
      this.swap(index, parent);
      this.siftUp(parent);
    }
  }

  private siftDown(index: number): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.items.length && this.items[left] < this.items[smallest]) smallest = left;
    if (right < this.items.length && this.items[right] < this.items[smallest]) smallest = right;

    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }

  private swap(a: number, b: number): void {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
}
