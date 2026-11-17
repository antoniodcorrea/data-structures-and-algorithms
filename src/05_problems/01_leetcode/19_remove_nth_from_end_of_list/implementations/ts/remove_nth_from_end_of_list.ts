export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Two-pass length method O(n)
export function removeNthFromEndTwoPass(head: ListNode | null, n: number): ListNode | null {
  let i = 0;
  let j = 0;
  let node = head;
  let current = head;

  // Get length.
  while (current.next) {
    current = current.next;

    i++;
  }

  const length = i + 1; // Add +1 to account for last node.next = null.
  const target = length - n - 1; // Target from left. -1 as we need base 0.

  // If length is equal to element to remove from end.
  // it is the first element, remove it.
  if (n === length) {
    head = head.next;
  }

  while (j < length - n) {
    if (j === target) {
      node.next = node.next?.next;

      break;
    }

    node = node.next;
    j++;
  }

  return head;
}

// Fast & Slow method O(n)
export function removeNthFromEndFastSlow(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  // Sentinel to allow working with .next values from start.
  const dummy = new ListNode(null, head);
  let slow = dummy;
  let fast = dummy;

  // Move fast pointer up to n
  for (let i = 0; i < n; i++) {
    if (!fast.next) return head;
    fast = fast.next;
  }

  // Now slow and fast are at a distance of n
  // Move both: when fast reaches end, slow will be at n from end
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Relink items
  if (slow && slow.next) slow.next = slow.next.next;

  return dummy.next;
}
