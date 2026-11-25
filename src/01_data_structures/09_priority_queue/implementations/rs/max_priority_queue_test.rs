#[cfg(test)]
mod tests {
  use super::super::max_priority_queue::MaxPriorityQueue;

  fn create_queue(values: &[i32]) -> MaxPriorityQueue {
    let mut queue = MaxPriorityQueue::new();
    for value in values {
      queue.enqueue(*value);
    }

    queue
  }

  fn dequeue_all(queue: &mut MaxPriorityQueue) -> Vec<i32> {
    let mut result = Vec::new();
    while let Some(value) = queue.dequeue() {
      result.push(value);
    }

    result
  }

  #[test]
  fn creates_empty_queue() {
    let queue = MaxPriorityQueue::new();

    assert_eq!(queue.is_empty(), true);
    assert_eq!(queue.size(), 0);
  }

  #[test]
  fn creates_independent_queues() {
    let first = create_queue(&[1]);
    let second = MaxPriorityQueue::new();

    assert_eq!(first.size(), 1);
    assert_eq!(second.size(), 0);
  }

  #[test]
  fn enqueue_increases_size() {
    let queue = create_queue(&[3, 1, 2]);

    assert_eq!(queue.is_empty(), false);
    assert_eq!(queue.size(), 3);
  }

  #[test]
  fn enqueue_moves_new_maximum_to_front() {
    let mut queue = create_queue(&[9, 4, 3, 2]);
    queue.enqueue(10);

    assert_eq!(queue.front(), Some(10));
  }

  #[test]
  fn enqueue_keeps_front_when_new_value_is_smaller() {
    let mut queue = create_queue(&[5]);
    queue.enqueue(2);

    assert_eq!(queue.front(), Some(5));
  }

  #[test]
  fn front_returns_none_when_queue_is_empty() {
    let queue = MaxPriorityQueue::new();

    assert_eq!(queue.front(), None);
  }

  #[test]
  fn front_returns_maximum_without_removing_it() {
    let queue = create_queue(&[3, 5, 4]);

    assert_eq!(queue.front(), Some(5));
    assert_eq!(queue.size(), 3);
  }

  #[test]
  fn dequeue_returns_none_when_queue_is_empty() {
    let mut queue = MaxPriorityQueue::new();

    assert_eq!(queue.dequeue(), None);
  }

  #[test]
  fn dequeue_removes_only_value() {
    let mut queue = create_queue(&[7]);

    assert_eq!(queue.dequeue(), Some(7));
    assert_eq!(queue.is_empty(), true);
  }

  #[test]
  fn dequeue_returns_values_in_descending_order() {
    let mut queue = create_queue(&[8, 3, 6, 1, 9, 2, 7, 5, 4]);

    assert_eq!(dequeue_all(&mut queue), [9, 8, 7, 6, 5, 4, 3, 2, 1]);
  }

  #[test]
  fn dequeue_handles_duplicated_and_negative_values() {
    let mut queue = create_queue(&[2, -1, 2, 0, -1]);

    assert_eq!(dequeue_all(&mut queue), [2, 2, 0, -1, -1]);
  }

  #[test]
  fn dequeue_keeps_order_when_alternating_with_enqueue() {
    let mut queue = create_queue(&[1, 3]);

    assert_eq!(queue.dequeue(), Some(3));
    queue.enqueue(5);
    queue.enqueue(2);
    assert_eq!(dequeue_all(&mut queue), [5, 2, 1]);
  }
}
