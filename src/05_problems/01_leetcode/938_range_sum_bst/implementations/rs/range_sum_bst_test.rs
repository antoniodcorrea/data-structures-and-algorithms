#[cfg(test)]
mod test {
  use std::cell::RefCell;
  use std::rc::Rc;
  use crate::range_sum_bst::range_sum_bst::Solution;
  use super::super::range_sum_bst::TreeNode;

  #[test]
  fn input_is_none() {
    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = None;
    let expected_output: i32 = 0;
    let result = Solution::range_sum_bst(input, 0, 0);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_tree_only_root_node() {
    // Build input
    let node_1 = TreeNode::new(1, None, None);

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_1)));
    let expected_output: i32 = 1;
    let result = Solution::range_sum_bst(input, 0, 1);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_tree_only_root_and_children_nodes() {
    // Build input
    let node_3 = TreeNode::new(3, None, None);
    let node_2 = TreeNode::new(2, None, None);
    let node_1 = TreeNode::new(
      1,
      Some(Rc::new(RefCell::new(node_2))),
      Some(Rc::new(RefCell::new(node_3))),
    );

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_1)));
    let expected_output: i32 = 6;
    let result = Solution::range_sum_bst(input, 0, 4);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_example_1() {
    // Build input
    let node_3 = TreeNode::new(3, None, None);
    let node_7 = TreeNode::new(7, None, None);
    let node_5 = TreeNode::new(
      5,
      Some(Rc::new(RefCell::new(node_3))),
      Some(Rc::new(RefCell::new(node_7))),
    );
    let node_18 = TreeNode::new(18, None, None);
    let node_15 = TreeNode::new(15, None, Some(Rc::new(RefCell::new(node_18))));
    let node_10 = TreeNode::new(
      10,
      Some(Rc::new(RefCell::new(node_5))),
      Some(Rc::new(RefCell::new(node_15))),
    );

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_10)));
    let expected_output: i32 = 32;
    let result = Solution::range_sum_bst(input, 7, 15);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_example_2() {
    // Build input
    let node_1 = TreeNode::new(1, None, None);
    let node_3 = TreeNode::new(3, Some(Rc::new(RefCell::new(node_1))), None);

    let node_6 = TreeNode::new(6, None, None);
    let node_7 = TreeNode::new(7, Some(Rc::new(RefCell::new(node_6))), None);

    let node_5 = TreeNode::new(
      5,
      Some(Rc::new(RefCell::new(node_3))),
      Some(Rc::new(RefCell::new(node_7))),
    );

    let node_13 = TreeNode::new(13, None, None);
    let node_18 = TreeNode::new(18, None, None);
    let node_15 = TreeNode::new(
      15,
      Some(Rc::new(RefCell::new(node_13))),
      Some(Rc::new(RefCell::new(node_18))),
    );

    let node_10 = TreeNode::new(
      10,
      Some(Rc::new(RefCell::new(node_5))),
      Some(Rc::new(RefCell::new(node_15))),
    );

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_10)));
    let expected_output: i32 = 23;
    let result = Solution::range_sum_bst(input, 6, 10);

    assert_eq!(expected_output, result);
  }
}
