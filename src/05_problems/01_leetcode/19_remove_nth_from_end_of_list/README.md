# 19 Remove Nth Node From End of List

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the `head` of a singly linked list, remove the `n`th node from the end of the list and return its head.

### Example 1:

- Input: `head = [1,2,3,4,5]`, `n = 2`
- Output: `[1,2,3,5]`

Explanation (visual positions from the end):

```
5(th) 4(th) 3(rd) 2(nd) 1(st)
 1  →  2  →  3  →  4  →  5
                  ^ remove (2nd from end)
```

### Example 2:

- Input: `head = [1]`, `n = 1`
- Output: `[]`

### Example 3:

- Input: `head = [1,2]`, `n = 1`
- Output: `[1]`

Constraints:

- The number of nodes in the list is in the range `[1, 30]`.
- `0 <= Node.val <= 100`
- `1 <= n <= size of the list`

Follow up: Could you do this in one pass?
