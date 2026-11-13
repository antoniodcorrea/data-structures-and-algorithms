export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let sentinel = new ListNode(0); // Sentinel to ensure first value.
  let current = sentinel; // Track current sentinel node.

  // If we have values on pointers for both lists.
  while (list1 && list2) {
    // If value of current list1 is less than value of current list2,
    // set it to current sentinel node and move pointer of list1.
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
      // Otherwise append list2 pointer value to current sentinel node
      // and move list2 pointer.
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    // Advance current sentinel node pointer.
    current = current.next;
  }

  // At the end append to current sentinel node the remaining values of list1 or list2.
  current.next = list1 || list2;

  // Return the next value of the sentinel, avoiding dummy value.
  return sentinel.next;
}

export function mergeTwoListsRecursive(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next);
    return list2;
  }
}
