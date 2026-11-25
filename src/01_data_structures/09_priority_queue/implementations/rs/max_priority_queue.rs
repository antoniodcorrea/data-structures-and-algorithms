use crate::heap::max_heap::{extract_max, insert_max};

pub struct MaxPriorityQueue {
  items: Vec<i32>,
}

impl MaxPriorityQueue {
  pub fn new() -> Self {
    MaxPriorityQueue { items: Vec::new() }
  }

  pub fn size(&self) -> usize {
    self.items.len()
  }

  pub fn is_empty(&self) -> bool {
    self.items.len() == 0
  }

  pub fn front(&self) -> Option<i32> {
    self.items.first().copied()
  }

  pub fn enqueue(&mut self, value: i32) {
    insert_max(&mut self.items, value);
  }

  pub fn dequeue(&mut self) -> Option<i32> {
    extract_max(&mut self.items)
  }
}
