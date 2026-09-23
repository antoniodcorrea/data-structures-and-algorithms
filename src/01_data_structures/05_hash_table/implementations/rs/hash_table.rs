use std::collections::LinkedList;

#[derive(Debug, PartialEq)]
pub struct HashTableItem<T> {
  pub key: String,
  pub value: T,
}

#[derive(Debug, PartialEq)]
pub struct HashTable<T> {
  buckets: Vec<LinkedList<HashTableItem<Box<T>>>>,
  size: usize,
}

impl<T: std::fmt::Debug> HashTable<T> {
  pub fn new(size: usize) -> Self {
    let mut buckets = Vec::with_capacity(size);

    for _ in 0..size {
      buckets.push(LinkedList::new());
    }

    HashTable { buckets, size }
  }

  fn hash(&self, key: &str) -> usize {
    let mut hash = 0;

    for unicode in key.chars() {
      hash = hash + unicode as usize
    }

    return hash % self.size;
  }

  pub fn buckets(&self) -> &Vec<LinkedList<HashTableItem<Box<T>>>> {
    &self.buckets
  }

  pub fn set(&mut self, key: &str, value: T) -> &mut Self {
    let bucket_index = self.hash(key);
    let bucket = &mut self.buckets[bucket_index];

    let existing_item = bucket.iter_mut().find(|item| item.key == key);

    match existing_item {
      Some(item) => {
        *item.value = value;
      }
      None => {
        let new_item = HashTableItem {
          key: key.to_string(),
          value: Box::new(value),
        };

        bucket.push_back(new_item);
      }
    }

    return self;
  }

  // Get an inmutable reference to the item
  pub fn get(&self, key: &str) -> Option<&T> {
    let bucket_index = self.hash(key);
    let bucket = &self.buckets[bucket_index];

    bucket.iter().find(|item| item.key == key).map(|item| item.value.as_ref())
  }

  // Get a mutable reference to the item
  pub fn get_mut(&mut self, key: &str) -> Option<&mut Box<T>> {
    let bucket_index = self.hash(key);
    let bucket = &mut self.buckets[bucket_index];

    bucket.iter_mut().find(|item| item.key == key).map(|item| &mut item.value)
  }

  pub fn has(&self, key: &str) -> bool {
    let bucket_index = self.hash(key);
    let bucket = &self.buckets[bucket_index];

    bucket.iter().any(|item| item.key == key)
  }

  pub fn remove(&mut self, key: &str) -> &mut Self {
    let bucket_index = self.hash(key);
    let bucket = &mut self.buckets[bucket_index];

    if let Some(item_index) = bucket.iter().position(|item| item.key == key) {
      bucket.remove(item_index);
    }

    self
  }

  pub fn is_empty(&mut self) -> bool {
    return self.buckets.iter().all(|item| item.is_empty());
  }

  /// Iterator function, useful to access all Hash Table contents, including those in lists, through its interface.
  /// Returns a type that implements Iterator trait with a tupe of references of key/value pairs.
  pub fn iter(&self) -> impl Iterator<Item = (&String, &Box<T>)> {
    self.buckets.iter().flat_map(|bucket| bucket.iter().map(|item| (&item.key, &item.value)))
  }

  /// Returns all keys of Hash Table
  pub fn keys(&self) -> Vec<String> {
    self.iter().map(|(key, _value)| key.clone()).collect()
  }
}
