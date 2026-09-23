# In-order Depth-First Search (DFS)

          20
        /    \
      10      30
     /  \    /  \
    5   15  25  35

Depth-First Search explores a tree by going as deep as possible along left branch first before backtracking.
Implemented using a stack (FILO) explicitly or with recursion, wich is a implicit stack.
In binary trees, Depth-First Search comes in three common variants: in-order, pre-order and post-order.

- **In-order**: Left → Parent → Right
  - Order:
    - Traverse the left subtree (in-order).
    - Visit the current node.
    - Traverse the right subtree (in-order).
  - In a Binary Search Tree this traversal returns nodes in sorted order: `[5, 10, 15, 20, 25, 30, 35]`.
