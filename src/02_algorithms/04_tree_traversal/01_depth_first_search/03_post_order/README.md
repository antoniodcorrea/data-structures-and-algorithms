# Post-order Depth-First Search (DFS)

          20
        /    \
      10      30
     /  \    /  \
    5   15  25  35

Depth-First Search explores a tree by going as deep as possible along left branch first before backtracking.
Implemented using a stack (FILO) explicitly or with recursion, wich is a implicit stack.
In binary trees, Depth-First Search comes in three common variants: in-order, pre-order and post-order.

- **Post-order**: Left → Right → Parent
  - Order:
    - Traverse the left subtree (post-order).
    - Traverse the right subtree (post-order).
    - Visit the current node.
  - Useful for deletion or evaluating expression trees (postfix notation).
  - In a Binary Search Tree this traversal returns: `[5, 15, 10, 25, 35, 30, 20]`.
