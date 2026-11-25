use crate::heap::min_heap::{extract_min, insert_min};

pub struct MinPriorityQueue {
  items: Vec<i32>,
}

impl MinPriorityQueue {
  pub fn new() -> Self {
    MinPriorityQueue { items: Vec::new() }
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
    insert_min(&mut self.items, value);
  }

  pub fn dequeue(&mut self) -> Option<i32> {
    extract_min(&mut self.items)
  }
}
