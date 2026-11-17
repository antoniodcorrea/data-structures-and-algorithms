import { ListNode, removeNthFromEndFastSlow, removeNthFromEndTwoPass, } from './remove_nth_from_end_of_list';


describe('Remove nth from end of list with two pointers', () => {
  test('Returns correct result', () => {
    const node: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const result = removeNthFromEndTwoPass(node, 2);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };
    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(1, null);
    const result = removeNthFromEndTwoPass(node, 1);
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndTwoPass(node, 1);
    const expectedResult = {
      val: 1,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndTwoPass(node, 2);
    const expectedResult = {
      val: 2,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(
      3,
      new ListNode(
        7,
        new ListNode(9, new ListNode(3, new ListNode(5, new ListNode(8, new ListNode(0, null))))),
      ),
    );
    const result = removeNthFromEndTwoPass(node, 1);
    const expectedResult = {
      val: 3,
      next: {
        val: 7,
        next: {
          val: 9,
          next: {
            val: 3,
            next: {
              val: 5,
              next: {
                val: 8,
                next: null,
              },
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  //   ----

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const result = removeNthFromEndTwoPass(node, 2);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(1, null);
    const result = removeNthFromEndTwoPass(node, 1);
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndTwoPass(node, 1);
    const expectedResult = {
      val: 1,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndTwoPass(node, 2);
    const expectedResult = {
      val: 2,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // remove head when n equals length
    const node: ListNode = new ListNode(
      10,
      new ListNode(20, new ListNode(30, new ListNode(40, null))),
    );
    const result = removeNthFromEndTwoPass(node, 4);
    const expectedResult = {
      val: 20,
      next: {
        val: 30,
        next: {
          val: 40,
          next: null,
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // remove last node (n = 1)
    const node: ListNode = new ListNode(7, new ListNode(8, new ListNode(9, null)));
    const result = removeNthFromEndTwoPass(node, 1);
    const expectedResult = {
      val: 7,
      next: {
        val: 8,
        next: null,
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // remove in the middle (odd length)
    const node: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const result = removeNthFromEndTwoPass(node, 3); // remove "3"
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // repeated values to ensure structural (not value-only) removal
    const node: ListNode = new ListNode(5, new ListNode(5, new ListNode(5, new ListNode(5, null))));
    const result = removeNthFromEndTwoPass(node, 2); // remove the 3rd node (from start)
    const expectedResult = {
      val: 5,
      next: {
        val: 5,
        next: {
          val: 5,
          next: null,
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // longer list; remove 5th from end in length 10 -> remove node with value 6
    const node: ListNode = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(
              5,
              new ListNode(
                6,
                new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10, null)))),
              ),
            ),
          ),
        ),
      ),
    );
    const result = removeNthFromEndTwoPass(node, 5);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 7,
                next: {
                  val: 8,
                  next: {
                    val: 9,
                    next: {
                      val: 10,
                      next: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });
});

describe('Remove nth from end of list with fast and slow pointers', () => {
  test('Returns correct result', () => {
    const node: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const result = removeNthFromEndFastSlow(node, 2);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };
    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(1, null);
    const result = removeNthFromEndFastSlow(node, 1);
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndFastSlow(node, 1);
    const expectedResult = {
      val: 1,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndFastSlow(node, 2);
    const expectedResult = {
      val: 2,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const node: ListNode = new ListNode(
      3,
      new ListNode(
        7,
        new ListNode(9, new ListNode(3, new ListNode(5, new ListNode(8, new ListNode(0, null))))),
      ),
    );
    const result = removeNthFromEndFastSlow(node, 1);
    const expectedResult = {
      val: 3,
      next: {
        val: 7,
        next: {
          val: 9,
          next: {
            val: 3,
            next: {
              val: 5,
              next: {
                val: 8,
                next: null,
              },
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const result = removeNthFromEndFastSlow(node, 2);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(1, null);
    const result = removeNthFromEndFastSlow(node, 1);
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndFastSlow(node, 1);
    const expectedResult = {
      val: 1,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const node: ListNode = new ListNode(1, new ListNode(2, null));
    const result = removeNthFromEndFastSlow(node, 2);
    const expectedResult = {
      val: 2,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // remove head when n equals length
    const node: ListNode = new ListNode(
      10,
      new ListNode(20, new ListNode(30, new ListNode(40, null))),
    );
    const result = removeNthFromEndFastSlow(node, 4);
    const expectedResult = {
      val: 20,
      next: {
        val: 30,
        next: {
          val: 40,
          next: null,
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // remove last node (n = 1)
    const node: ListNode = new ListNode(7, new ListNode(8, new ListNode(9, null)));
    const result = removeNthFromEndFastSlow(node, 1);
    const expectedResult = {
      val: 7,
      next: {
        val: 8,
        next: null,
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // remove in the middle (odd length)
    const node: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
    );
    const result = removeNthFromEndFastSlow(node, 3); // remove "3"
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // repeated values to ensure structural (not value-only) removal
    const node: ListNode = new ListNode(5, new ListNode(5, new ListNode(5, new ListNode(5, null))));
    const result = removeNthFromEndFastSlow(node, 2); // remove the 3rd node (from start)
    const expectedResult = {
      val: 5,
      next: {
        val: 5,
        next: {
          val: 5,
          next: null,
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // longer list; remove 5th from end in length 10 -> remove node with value 6
    const node: ListNode = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(
              5,
              new ListNode(
                6,
                new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10, null)))),
              ),
            ),
          ),
        ),
      ),
    );
    const result = removeNthFromEndFastSlow(node, 5);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 7,
                next: {
                  val: 8,
                  next: {
                    val: 9,
                    next: {
                      val: 10,
                      next: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });
});
