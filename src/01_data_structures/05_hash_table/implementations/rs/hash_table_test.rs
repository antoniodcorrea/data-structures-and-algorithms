#[cfg(test)]
mod tests {
  use super::super::hash_table::HashTable;

  #[test]
  fn creates_hash_table() {
    let _hash_table: HashTable<i32> = HashTable::new(10);

    assert_eq!(true, true);
  }

  #[test]
  fn set_item_to_empty_hash_table() {
    let mut hash_table: HashTable<i32> = HashTable::new(3);
    let result = hash_table.set("a", 1).get("a");

    assert_eq!(result, Some(1).as_ref());
  }

  #[test]
  fn set_item_to_empty_hash_table_with_multibyte_characters() {
    let mut hash_table: HashTable<i32> = HashTable::new(3);
    let result = hash_table.set("ñ", 1).get("ñ");

    assert_eq!(result, Some(1).as_ref());
  }

  #[test]
  fn set_existing_key_updates_value() {
    let mut hash_table: HashTable<i32> = HashTable::new(3);
    let result = hash_table.set("a", 1).set("a", 2).get("a");

    assert_eq!(result, Some(2).as_ref());
  }

  #[test]
  fn removes_key_set_twice() {
    let mut hash_table: HashTable<i32> = HashTable::new(3);
    let result = hash_table.set("a", 1).set("a", 2).remove("a").get("a");

    assert_eq!(result, None);
  }

  #[test]
  fn get_item_from_empty_hash_table() {
    let hash_table: HashTable<i32> = HashTable::new(10);
    let result = hash_table.get("a");

    assert_eq!(result, None);
  }

  #[test]
  fn get_item_from_bucket_with_single_item() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    let result = hash_table.set("a", 1).get("a");

    assert_eq!(result, Some(1).as_ref());
  }

  #[test]
  fn get_item_from_bucket_with_collisions() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.set("abc", 1).set("cba", 2);

    let abc = hash_table.get("abc");
    assert_eq!(abc, Some(1).as_ref());

    let cba = hash_table.get("cba");
    assert_eq!(cba, Some(2).as_ref());
  }

  #[test]
  fn has_item_from_bucket_with_collisions() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.set("abc", 1).set("bcd", 2);

    let contains_abc = hash_table.has("abc");
    assert_eq!(contains_abc, true);

    let contains_bcd = hash_table.has("bcd");
    assert_eq!(contains_bcd, true);

    let contains_cde = hash_table.has("cde");
    assert_eq!(contains_cde, false);
  }

  #[test]
  fn tries_remove_from_empty_hash_table() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.remove("a");

    assert_eq!(true, true);
  }

  #[test]
  fn removes_from_hash_table_with_single_item() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    let result = hash_table.set("a", 1).get("a");

    assert_eq!(result, Some(1).as_ref());
  }

  #[test]
  fn removes_from_hash_tables_with_several_items() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.set("a", 1).set("b", 2);

    let a = hash_table.get("a");
    let b = hash_table.get("b");

    assert_eq!(a, Some(1).as_ref());
    assert_eq!(b, Some(2).as_ref());

    let removed_a = hash_table.remove("a").get("a");
    assert_eq!(removed_a, None);

    let removed_b = hash_table.remove("b").get("b");
    assert_eq!(removed_b, None);
  }

  #[test]
  fn check_hash_table_is_empty() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    let is_empty = hash_table.is_empty();

    assert_eq!(is_empty, true);

    hash_table.set("a", 1);
    let is_empty_after_set = hash_table.is_empty();

    assert_eq!(is_empty_after_set, false);
  }
}
