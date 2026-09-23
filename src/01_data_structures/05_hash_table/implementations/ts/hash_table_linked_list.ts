/*
  LINKED LIST FOR HASH TABLES
  In hash tables we will store items in our linked lists as key, value tuples.
  To find an item by the key we need a method that receives a matcher function, and will return the item that matches it.
  Thus, we extend the Linked list to add this behavior.
*/

import { LinkedList } from '../../../02_linked_list/implementations/ts/linked_list';

export class HashTableLinkedList<T> extends LinkedList<[string, T]> {
  getItemIf(matcher: (arg: [string, T]) => boolean): [string, T] | null {
    let current = this.head;

    while (current !== null) {
      // If found
      if (matcher(current.value)) {
        return current.value;
      }
      current = current.next;
    }

    // Not found
    return null;
  }

  updateItemIf(matcher: (arg: [string, T]) => boolean, value: T) {
    const item = this.getItemIf(matcher);
    if (!item) {
      return false;
    }

    item[1] = value;

    return true;
  }
}
