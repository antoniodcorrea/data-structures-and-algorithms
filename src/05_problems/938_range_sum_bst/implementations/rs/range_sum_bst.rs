use std::cell::RefCell;
use std::rc::Rc;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
  pub val: i32,
  pub left: Option<Rc<RefCell<TreeNode>>>,
  pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
  #[inline]
  pub fn new(
    val: i32,
    left: Option<Rc<RefCell<TreeNode>>>,
    right: Option<Rc<RefCell<TreeNode>>>,
  ) -> Self {
    TreeNode { val, left, right }
  }
}

pub struct Solution;

impl Solution {
  pub fn range_sum_bst(input: Option<Rc<RefCell<TreeNode>>>, min: i32, max: i32) -> i32 {
    let mut sum = 0;

    if let Some(root_node) = input {
      let tree = root_node.borrow();
      if tree.val <= max && tree.val >= min {
        sum += &tree.val
      }
      sum += Self::range_sum_bst(tree.left.clone(), min, max);
      sum += Self::range_sum_bst(tree.right.clone(), min, max);

      sum
    } else {
      sum
    }
  }
}
