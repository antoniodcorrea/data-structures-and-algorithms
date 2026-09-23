import { HashTable } from "./hash_table";

describe("new HashTable()", () => {
  test("Creates a HashTable object", async () => {
    const hashTable = new HashTable();
    expect(hashTable).not.toBe(undefined);
  });
});

describe("set()", () => {
  test("Sets an item into an empty HashTable", async () => {
    const hashTable = new HashTable().set("a", 1);

    expect(hashTable).not.toBe(undefined);
  });

  test("Sets an item with multibite character key into an empty HashTable", async () => {
    const hashTable = new HashTable().set("ñ", 1);
    const item = hashTable.get("ñ");

    expect(item).toBe(1);
  });

  test("Updates the value of an existing key", async () => {
    const hashTable = new HashTable().set("a", 1).set("a", 2);

    expect(hashTable.get("a")).toBe(2);
  });

  test("Removes a key that was set twice", async () => {
    const hashTable = new HashTable().set("a", 1).set("a", 2);
    hashTable.remove("a");

    expect(hashTable.get("a")).toBe(null);
  });
});

describe("get()", () => {
  test("Gets an item from an empty hash table", async () => {
    const hashTable = new HashTable();
    const item = hashTable.get("a");

    expect(item).toBe(null);
  });

  test("Gets an item from a bucket with a single item", async () => {
    const hashTable = new HashTable().set("a", 1);
    const item = hashTable.get("a");

    expect(item).toBe(1);
  });

  test("Gets an item from a bucket with several items with collisions", async () => {
    const hashTable = new HashTable().set("abc", 1).set("cba", 2);

    const abc = hashTable.get("abc");
    const cba = hashTable.get("cba");

    expect(abc).toBe(1);
    expect(cba).toBe(2);
  });
});

describe("remove()", () => {
  test("Tries to remove an item from an empty hash table", async () => {
    const hashTable = new HashTable();
    hashTable.remove("a");

    expect(hashTable.get("a")).toBe(null);
  });

  test("Removes an item from a hash table with a single item", async () => {
    const hashTable = new HashTable().set("a", 1);
    expect(hashTable.get("a")).toBe(1);

    hashTable.remove("a");
    expect(hashTable.get("a")).toBe(null);
  });

  test("Removes items from a hash table with several items", async () => {
    const hashTable = new HashTable().set("a", 1).set("b", 2);
    const a = hashTable.get("a");
    const b = hashTable.get("b");
    expect(a).toBe(1);
    expect(b).toBe(2);

    hashTable.remove("a");
    expect(hashTable.get("a")).toBe(null);
    expect(hashTable.get("b")).toBe(2);

    hashTable.remove("b");
    expect(hashTable.get("a")).toBe(null);
    expect(hashTable.get("b")).toBe(null);
  });
});

describe("isEmpty()", () => {
  test("Checks that hash table is empty", async () => {
    const hashTable = new HashTable();
    const isEmpty = hashTable.isEmpty();

    expect(isEmpty).toBe(true);

    hashTable.set("a", 1);
    const isEmptyAfterInsert = hashTable.isEmpty();

    expect(isEmptyAfterInsert).toBe(false);
  });
});
