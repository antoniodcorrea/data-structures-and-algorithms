# Trie (Prefix Tree)

## Description

A **Trie** is a _multi-way_ _ordered_ tree where each node stores one character of a string, as well as a property to mark the string ends.

Used to efficiently store and retrieve keys in a dataset of strings in autocomplete systems, prefix-based searching, dictionaries, and IP routing.

## Methods

- **Insert:** Add each character of the word into the trie node by node, and mark the end with a boolean.
- **Search:** Traverse character by character and return true if a complete word exists.
- **StartsWith:** Similar to search but only checks if a prefix exists.
- **Delete:** Remove a word, typically handled with recursion and backtracking.

## Pseudocode

### Insert

Inserts a word into the trie.

```
INSERT(root, word):
  node = root
  for char in word:
    if char not in node.children:
      node.children[char] = new Node()
    node = node.children[char]

  node.is_end = true
```

### Search

Checks if a word exists in the trie.

```
SEARCH(root, word):
  node = root
  for char in word:
    if char not in node.children:
      return false
    node = node.children[char]

  return node.is_end
```

### Delete

Recursively removes a word from the trie, cleaning up nodes if they become unnecessary.

```
DELETE(node, word, depth = 0):
  if depth == length of word:
    if node.is_end:
      node.is_end = false
      return true if node has no children
    return false

  char = word[depth]
  if char in node.children:
    should_delete = DELETE(node.children[char], word, depth + 1)
    if should_delete:
      delete node.children[char]
      return true if node has no children and not node.is_end

  return false
```

### Suggest

Finds all words in the trie that begin with a given prefix.

```
SUGGEST(root, prefix):
  node = root
  for char in prefix:
    if char not in node.children:
      return []
    node = node.children[char]

  results = []
  DFS(node, prefix, results)
  return results

DFS(node, prefix, results):
  if node.is_end:
    results.append(prefix)

  for char, child in node.children:
    DFS(child, prefix + char, results)
```

## Characteristics

- **Prefix-sharing:** Common prefixes are stored once.
- **Deterministic path traversal:** One character at each level.
- **Space-efficient for small alphabets.**

### Time Complexity:

| Operation  | Time Complexity |
| ---------- | --------------- |
| Insert     | O(m)            |
| Search     | O(m)            |
| StartsWith | O(m)            |

Where `m` is the length of the word or prefix.

### Space Complexity:

- Worst-case: O(ALPHABET_SIZE \* m \* n), where `n` is the number of words.
- More space-efficient with shared prefixes and reduced alphabets.

## Example

### Insertion of Words: `to`, `tea`, `ted`, `ten`, `in`, `inn`

```
Root
├── t
│   └── o [end]
│   └── e
│       ├── a [end]
│       ├── d [end]
│       └── n [end]
└── i
    └── n [end]
        └── n [end]
```

### Search

```
SEARCH("ten")    -> true
SEARCH("te")     -> false
SEARCH("in")     -> true
SEARCH("inn")    -> true
```

### StartsWith

```
STARTS_WITH("te")  -> true
STARTS_WITH("ta")  -> false
```
