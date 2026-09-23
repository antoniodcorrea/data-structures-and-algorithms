import { HashTableLinkedList } from './hash_table_linked_list';

export class HashTable<T> {
  private buckets: Array<HashTableLinkedList<T>>;
  private size;

  constructor(size = 127) {
    this.buckets = new Array(size);
    this.size = size;
  }

  set(key: string, value: T): HashTable<T> {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashTableLinkedList();
    }

    const bucket = this.buckets[index];
    const matchKey = ([listKey]: [string, T]) => listKey === key;
    const appendedToFoundKey = bucket.updateItemIf(matchKey, value);

    if (!appendedToFoundKey) {
      bucket.append([key, value]);
    }

    return this;
  }

  get(key: string): T | null {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return null;

    const item = bucket.getItemIf((item) => item[0] === key);
    if (!item) return null;

    return item[1];
  }

  remove(key: string): HashTable<T> {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return this;

    bucket.remove((item) => item[0] === key);

    return this;
  }

  isEmpty(): boolean {
    return this.buckets.every((item) => item.head == null);
  }

  private hash(key: string): number {
    const stringifiedKey = String(key);
    let hash = 0;

    for (let i = 0; i < stringifiedKey.length; i++) {
      hash = hash + stringifiedKey.charCodeAt(i);
    }

    return hash % this.size;
  }
}
