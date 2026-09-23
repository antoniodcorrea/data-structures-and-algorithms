import { HashTableLinkedList } from "./hash_table_linked_list";

describe("getItemIf()", () => {
  test("Gets an item that matches a callback from empty list", async () => {
    const linkedList = new HashTableLinkedList<number>();

    const result = linkedList.getItemIf(([key]) => key === "a");
    expect(result).toBeNull();
  });

  test("Gets an item that matches a callback from a list with a single item", async () => {
    const linkedList = new HashTableLinkedList<number>().append(["a", 1]);

    const result = linkedList.getItemIf(([key]) => key === "a");
    expect(result).toEqual(["a", 1]);
  });

  test("Gets an item that matches a callback from a list with a several items", async () => {
    const linkedList = new HashTableLinkedList<number>().prepend(["a", 1]).prepend(["b", 2]);

    const a = linkedList.getItemIf(([key]) => key === "a");
    expect(a).toEqual(["a", 1]);

    const b = linkedList.getItemIf(([key]) => key === "b");
    expect(b).toEqual(["b", 2]);
  });

  test("Gets a complex item matching a callback from a list with a several items", async () => {
    const linkedList = new HashTableLinkedList<{ name: string; age: number }>()
      .prepend(["a", { name: "Homero", age: 10 }])
      .prepend(["b", { name: "Ulises", age: 20 }]);

    const a = linkedList.getItemIf(([, value]) => value.name === "Homero");
    expect(a).toEqual(["a", { name: "Homero", age: 10 }]);

    const b = linkedList.getItemIf(([, value]) => value.name === "Ulises");
    expect(b).toEqual(["b", { name: "Ulises", age: 20 }]);
  });
});
