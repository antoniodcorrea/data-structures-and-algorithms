# Hash Table

Dynamic key-value data structure that allows efficient storage and retrieval of data via keys using a hashing function.

Typically implemented with an array, where a hash function maps keys to array indices.
Two main strategies to handle collisions (when multiple keys hash to the same index): chaining (one linked list at each
index) or open addressing (using the next available index).

## Pseudocode (chaining)

```
CREATE_HASH_TABLE ()
  storage = array of fixed size
```

```
HASH (key)
  convert key to numeric index
  return index within array bounds
```

```
SET (key, value)
  index = HASH(key)
  if storage[index] is empty
    create bucket (list)
  if key exists in bucket
    update its value
  else
    add (key, value) to bucket
```

```
GET (key)
  index = HASH(key)
  search bucket at storage[index] for key
  return value if found
```

```
REMOVE (key)
  index = HASH(key)
  search bucket at storage[index] for key
  remove key-value pair if found
```

## Explanation

A hash table has three core operations:

- Set: adds or updates a key-value pair.
- Get: retrieves the value for a given key.
- Remove: deletes a key-value pair.

### Hash functions

Function that maps some input of arbitrary size to a fixed-size output, which may be integers or fixed-length strings
depending on the application.
Hash tables use hash functions to map a key into an index within the table, typically via modulo.
Hash functions are deterministic: they must always produce the same output for the same input.
They should aim to distribute outputs as uniquely and evenly as possible, although collisions are expected due to
limited size of the table.

There are several types of Hash Functions depending on their use case:

- **General-purpose hashing**: lightweight, used in hash tables.
- **Cryptographic hashing**: heavy, used in security, authentication and data integrity, e.g.: MD2, SHA-1, SHA-256,
  SHA-3.
- **Checksums and error detection**: lightweight, used to catch random accidents in storage, data transmission and
  integrity verification, e.g.: CRC32, Adler-32.

Some **general-purpose hashing** functions used for hash tables are:

- **Additive Hash**: simple and fast, but poor collision resistance, e.g.: the sum of the ASCII values —$ord(c)$— of all
  characters in the string, modulo the size $m$ of the hash table.
  $$
  h(k) = \left( \sum_{i=0}^{n-1} \operatorname{ord}(k_i) \right) \bmod m
  $$
- **Division Hash**: basic, used with integer keys, e.g.: the remainder of the division of an integer by the size of the
  hashmap:
  $$\text{hash}(k) = k \bmod m$$
- **Multiplication Hash**: better spreads, based on products, e.g.: The floor of the table size multiplied by the
  decimal part of the key times a constant $A$ (e.g.: 0.618033).
  $$
  h(k) = \left\lfloor m \times (k \times A \bmod 1) \right\rfloor
  $$
- **MurmurHash**: a fast, high-quality, non-cryptographic hash function widely used in real-world hash tables. It uses
  bitwise operations, multiplications, and mixing steps to produce well-distributed hashes, especially for strings and
  binary data. Excellent for performance and low collision rates in large-scale systems.
- **CityHash**, **FNV-1a**, **xxHash**, **siphash**, etc.

For our hash table implementation we will create an **Additive hash** function following the provided formula in the
previous definition.

### Collision resolution

As collisions are expected in our hash functions, we need a way to store multiple key-value pairs that maps to same
index in the hash table.
There are two main strategies:

- **Chaining**: each index stores a linked list holding key-value pairs. Each key-value pair is stored in the list that
  corresponds to the index produced by the hash of the key. To retrieve or delete it we can use the methods of the
  linked list checking for the key. Higher memory usage due to the pointers of the list.
- **Open addressing**: each key-value pair is stored directly in the array of the hash table. When collisions happen we
  look for next free position using different probing strategies (linear, quadratic, or double hashing). More
  performant, but higher implementation complexity.

Our implementation will use **Chaining** as collision resolution strategy given its simplicity.

## Characteristics

Hash tables offer near-constant time performance for basic operations on average. Performance depends on the hash
function and how collision resolution is handled. Worst-case time can degrade if many collisions occur.

### Operations

| Operation | Time Complexity (Average) | Time Complexity (Worst) |
|-----------|---------------------------|-------------------------|
| Set       | O(1)                      | O(n)                    |
| Get       | O(1)                      | O(n)                    |
| Remove    | O(1)                      | O(n)                    |
