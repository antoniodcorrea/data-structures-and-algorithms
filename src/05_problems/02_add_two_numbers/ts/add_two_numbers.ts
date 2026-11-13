export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  let current1 = l1;
  let current2 = l2;
  let carry = 0;
  let result = new ListNode();
  let currentResultNode = result;

  while (current1 || current2) {
    if (!current1) {
      current1 = new ListNode();
    } else if (!current2) {
      current2 = new ListNode();
    }
    const sum = current1?.val + current2?.val + carry;
    currentResultNode.next = {
      val: sum % 10,
      next: null,
    };
    carry = Math.floor(sum / 10);

    currentResultNode = currentResultNode.next;
    current1 = current1.next;
    current2 = current2.next;
  }

  if (carry > 0) {
    currentResultNode.next = {
      val: carry,
      next: null,
    };
  }

  return result.next;
}
