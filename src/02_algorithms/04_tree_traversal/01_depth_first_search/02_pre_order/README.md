# Pre-order Depth-First Search (DFS)

          20
        /    \
      10      30
     /  \    /  \
    5   15  25  35

Depth-First Search explores a tree by going as deep as possible along left branch first before backtracking.
Implemented using a stack (FILO) explicitly or with recursion, wich is a implicit stack.
In binary trees, Depth-First Search comes in three common variants: in-order, pre-order and post-order.

- **Pre-order**: Parent → Left → Right
  - Order:
    - Traverse the current node.
    - Traverse the left subtree (pre-order).
    - Traverse the right subtree (pre-order).
  - In a Binary Search Tree this traversal returns: `[20, 10, 5, 15,2 5, 35]`.
  - Useful for copying or serializing a tree.
