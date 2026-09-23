# Disjoint Set Union (AKA Union-Find)

## Description

**Disjoint Set Union (DSU)** is a data structure used to efficiently manage a collection of non overlapping sets. It allows creating edges between nodes as well as querying whether two nodes belong to same set.

Typically implemented using an array or as a parent-pointer tree.

Especially useful in graph-related algorithms and problems where group membership must be tracked efficiently: social or computer networks as well as puzzles related to islands, clusters and grouping.

## Methods

- **Find:** Returns the representative of the group containing the element.
- **Union:** Merges two groups by setting the representative of one as the representative of the other.
- **Connected:** Checks if two elements are in the same group.

## Optimizations

- **Path compression**: optimizes `find` method by flattening the tree parent references, useful for fast lookups,
- **Union by rank or size**: optimizes `union` method by keeping track of tree's depth or size to decide the representative of the new tree.

## Pseudocode

A common implementation is to use a `representatives` array to hold the trees, where "representative" means the root of each tree.
Each index of the `representatives` array `i` refers to one node value, and each `representatives` value `representatives[i]` is the index of its representative —its tree's root—.

If a value is equal to the representative it holds, this value is the representative of its group. The `representatives` array is initialized with items where all of them are their own representatives, i.e., all of them are disjoint: individual trees with one node each, being the root of each tree the only node it holds.
When performing `union` representatives are added to join trees.

For example, let's say we want to represent a group with three elements: {2, 5, 7}.

```
  2
 /
5
 \
  7
```

We instantiate the `representatives` with three elements, taking into account the base 0:

```
set = DisjointSet(4);

// [0, 1, 2, 3, 4, 5, 6, 7]
```

Then we perform union for our three items:

```
set.union(2, 5)
// [0, 1, 2, 3, 4, 2, 6, 7]
          2        5
set.union(2, 7)
// [0, 1, 2, 3, 4, 2, 6, 2]
          2        5     7
```

If we want to add a new disjoint set of {1, 3}:

```
  2   1
 /     \
5       3
 \
  7

set.union(1,3)

          2        5     7
// [0, 1, 2, 1, 4, 2, 6, 2]
       1     3
```

When merging, the root of each tree is updated.

```
  2   1
 /     \
5       3
 \
  7

set.union(1,2)

       1  2  3     5     7
// [0, 1, 1, 1, 4, 2, 6, 2]
```

To merge groups the structure also has a "ranks" array that holds the depth of each representative. To decide which representative prevails we compare their ranks, and act accordingly.

Path compression is performed lazily when performing `find`.

### Find (with path compression)

Finds the representative of the group and compresses the path:

    FIND(x):
      if representatives[x] != x:
        representatives[x] = FIND(representatives[x])
      return representatives[x] // returns the representative.

### Union (by rank)

Merges the groups containing x and y:

    UNION(x, y):
      representativeX = FIND(x)
      representativeY = FIND(y)

      if representativeX == representativeY:
        return

      if rank[representativeX] < rank[representativeY]:
        representatives[representativeX] = representativeY
      else if rank[representativeX] > rank[representativeY]:
        representatives[representativeY] = representativeX
      else:
        representatives[representativeY] = representativeX
        rank[representativeX] += 1

### Connected

Checks if two elements are in the same group.

    CONNECTED(x, y):
      return FIND(x) == FIND(y)

## Characteristics

### Time Complexity

| Operation | Amortized Time Complexity |
| --------- | ------------------------- |
| Make Set  | O(1)                      |
| Find      | O(α(n))                   |
| Union     | O(α(n))                   |
| Connected | O(α(n))                   |

- Where **α(n)** is the inverse Ackermann function, which is practically constant for all realistic values of `n`.

### Space Complexity

- O(n): One entry per element in `representative` and optionally `rank` arrays.
