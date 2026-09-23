# Binary Search Tree (BST)

## Description

A Binary Search Tree is an ordered binary tree, where:

- The left subtree of a node contains only nodes with values less than the node's value.
- The right subtree of a node contains only nodes with values greater than the node's value.

```
Left < root < right
```

This property enables efficient search, insertion, and deletion operations.

Binary Search Trees are commonly used in scenarios requiring sorted data access, such as symbol tables, set/map implementations and range queries.

Typically implemented with pointers —and not with arrays— as they are not always complete trees.

## Methods

- **Search:** Traverse left or right depending on comparison with the current node.
- **Insert:** Recursively insert in the left or right subtree as a leaf, maintaining the BST ordering.
- **Delete:** Handle three cases: leaf, one child, or two children. There are two ways to perform the deletion:
  - **In-order successor**: replace the node with the smallest node in the right subtree.
  - **In-order predecessor**: Replace the node with the largest node in the left subtree.
- **Min Value Node:** Finds the smallest value in a subtree —used for deletion—.

## Pseudocode

### Insert

Inserts a value into the tree while maintaining its ordering property.

    INSERT(node, value):
      if node is null:
        return new Node(value)

      if value < node.value:
        newLeft = INSERT(node.left, value)
        return new Node(node.value, newLeft, node.right)
      else:
        newRight = INSERT(node.right, value)
        return new Node(node.value, node.legt, newRight)

      return node

### Delete

Deletes a value from the tree with in-order successor.

    DELETE(node, value):
      if node is null:
        return node

      if value < node.value:
        newLeft = DELETE(node.left, value)
        return new Node(node.value, newLeft, node.right)
      else if value > node.value:
        newRight = DELETE(node.right, value)
        return new Node(node.value, node.left, newRight)
      else:
        if node.left is null:
          return node.right

        if node.right is null:
          return node.left

        successor = GET_LEFTMOST_NODE(node.right)
        node.value = successor.value
        node.right = DELETE(node.right, successor.value)

      return node

### Min Value Node (private)

Finds the smallest value in a subtree recursively (used for deletion)

    GET_LEFTMOST_NODE(node):
      if node.left is not null:
        return GET_LEFTMOST_NODE(node.left)
      else
        return node

### Search

Searches for a value in the BST.

    SEARCH(node, value):
      if node is null or node.value == value:
        return node
      if value < node.value:
        return SEARCH(node.left, value)
      else:
        return SEARCH(node.right, value)

## Characteristics

### Time Complexity:

- Best/Average Case:
  - Search: O(log n).
  - Insert: O(log n).
  - Delete: O(log n).
- Worst Case (unbalanced tree):
  - Search: O(n).
  - Insert: O(n).
  - Delete: O(n).

### Space Complexity:

- Recursive implementations may use up to O(h) stack space, where h is the height of the tree.

## Example

### Insertion

INSERT(10)

    10

INSERT(5)

      10
     /
    5

INSERT(15)

      10
     /  \
    5    15

INSERT(3)

          10
        /  \
       5    15
      /
    3

### Deletion

           10
          /  \
         5   15
        /  \
      14    16
      /
    13

DELETE(10)

        13
       /  \
     5    15
        /  \
      14    16

### Searching

       13
      /  \
     5    15
        /  \
      14    16

Search 15 -> Node 15
Search 7 -> NULL
