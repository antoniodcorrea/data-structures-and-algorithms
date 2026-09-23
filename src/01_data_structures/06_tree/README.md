# Tree

**Trees** are hierarchical data structures composed of nodes, where each node may have zero or more child nodes. Used to represent structured data, e.g.: file systems, expressions, and indexes.

## Characteristics:

- **Arity**: maximum number of children a node can have: binary, ternary, etc. Trees with arity greater than 2 are called "multi-way".
- **Balanced**: A tree where the height is kept as small as possible, often by ensuring that the heights of the left and right subtrees differ by no more than one level. Efficient search, insert, and delete.
- **Balance Factor**: tree where each node maintains a balance factor —difference in height between left and right subtrees—. Used in trees like AVL.
- **Full**: Binary tree in which every node has either 0 or the maximum number of children allowed.
- **Complete**: Binary tree where all levels are completely filled except maybe the last, and where the last level is filled from left to right. E.g.: Heaps.
- **Ordered**: The position of children matters, typically used in syntax trees or expression trees.
- **Perfect**: Binary tree where all internal nodes have the maximum amount of children allowed, and all leaves are at the same level. It's both full and complete.
- **Degenerate/Pathological**: Tree where each parent has only one child, resembling a linked list. Worst-case performance in unbalanced Binary Search Trees.

## Types

- [**Binary Search Tree**](./01_binary_search_tree/README.md): A binary tree where the left child contains a value less than the node, and the right child contains a value greater than the node. Efficient search, insertion, and deletion.

- [**Heap**](./02_heap/README.md): A complete binary tree that satisfies the heap property: every parent node is greater than or equal to (max-heap) or less than or equal to (min-heap) its children. Used in priority queues.

- [**Trie**](./03_trie/README.md): A tree used for storing strings, where each level represents a character of the string. Fast prefix lookups, commonly used in autocomplete systems and dictionaries. Insert and search will have a time complexity of $h$, where $h$ is the length of the word.

- [**AVL Tree**](./04_avl_tree/README.md): A self-balancing binary search tree where the heights of the left and right subtrees differ by at most one. Guarantees O(log n) time for insert, delete, and search.

- [**B-Tree**](./05_b_tree/README.md): Self-balancing multi-way search tree where each node can have multiple keys and children. Minimizes disk reads/writes, database and file system indexing.

- [**Red-Black Tree**](./06_red_black_tree/README.md): A self-balancing binary search tree that uses color rules —red and black— to maintain balance. Efficient insert and delete operations with O(log n) performance.

- [**B+ Tree**](./07_b_plus_tree/README.md): Variant of the B-Tree where all values are stored at the leaf nodes, and internal nodes store only keys. Leaf nodes are usually linked, allowing efficient range queries and sequential access. Used in database indexes.
