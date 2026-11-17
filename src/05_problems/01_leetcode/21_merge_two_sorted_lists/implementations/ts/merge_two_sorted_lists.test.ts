import { ListNode, mergeTwoLists, mergeTwoListsRecursive } from './merge_two_sorted_lists';

describe('mergeTwoLists', () => {
  test('Returns the correct result', () => {
    const list1: ListNode = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    const list2: ListNode = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    const result = mergeTwoLists(list1, list2);
    const expectedResult = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
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
    const list1: ListNode = null as unknown as ListNode;
    const list2: ListNode = null as unknown as ListNode;
    const result = mergeTwoLists(list1, list2);
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const list1: ListNode = null as unknown as ListNode;
    const list2: ListNode = new ListNode(0, null);
    const result = mergeTwoLists(list1, list2);
    const expectedResult = {
      val: 0,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const list1: ListNode = new ListNode(-10, new ListNode(-3, new ListNode(0, null)));
    const list2: ListNode = new ListNode(-5, new ListNode(-3, new ListNode(2, null)));
    const result = mergeTwoLists(list1, list2);
    const expectedResult = {
      val: -10,
      next: {
        val: -5,
        next: {
          val: -3,
          next: {
            val: -3,
            next: {
              val: 0,
              next: {
                val: 2,
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
    const list1: ListNode = new ListNode(1, new ListNode(1, new ListNode(1, null)));
    const list2: ListNode = new ListNode(1, new ListNode(1, new ListNode(1, null)));
    const result = mergeTwoLists(list1, list2);
    const expectedResult = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 1,
          next: {
            val: 1,
            next: {
              val: 1,
              next: {
                val: 1,
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
    const list1: ListNode = new ListNode(5, null);
    const list2: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, null))),
    );
    const result = mergeTwoLists(list1, list2);
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
              next: null,
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // Interleaving values
    const list1: ListNode = new ListNode(1, new ListNode(3, new ListNode(5, null)));
    const list2: ListNode = new ListNode(2, new ListNode(4, new ListNode(6, null)));
    const result = mergeTwoLists(list1, list2);
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
                val: 6,
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
    // One list much longer
    const list1: ListNode = new ListNode(-1, null);
    const list2: ListNode = new ListNode(
      0,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))),
    );
    const result = mergeTwoLists(list1, list2);
    const expectedResult = {
      val: -1,
      next: {
        val: 0,
        next: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                val: 4,
                next: {
                  val: 5,
                  next: null,
                },
              },
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // Already in order without interleaving (all list1 before list2)
    const list1: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const list2: ListNode = new ListNode(4, new ListNode(5, new ListNode(6, null)));
    const result = mergeTwoLists(list1, list2);
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
                val: 6,
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
    // Single element vs single element
    const list1: ListNode = new ListNode(2, null);
    const list2: ListNode = new ListNode(1, null);
    const result = mergeTwoLists(list1, list2);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    };

    expect(result).toEqual(expectedResult);
  });
});

describe('mergeTwoListsRecursive', () => {
  test('Returns the correct result', () => {
    const list1: ListNode = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    const list2: ListNode = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
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
    const list1: ListNode = null as unknown as ListNode;
    const list2: ListNode = null as unknown as ListNode;
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const list1: ListNode = null as unknown as ListNode;
    const list2: ListNode = new ListNode(0, null);
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = {
      val: 0,
      next: null,
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const list1: ListNode = new ListNode(-10, new ListNode(-3, new ListNode(0, null)));
    const list2: ListNode = new ListNode(-5, new ListNode(-3, new ListNode(2, null)));
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = {
      val: -10,
      next: {
        val: -5,
        next: {
          val: -3,
          next: {
            val: -3,
            next: {
              val: 0,
              next: {
                val: 2,
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
    const list1: ListNode = new ListNode(1, new ListNode(1, new ListNode(1, null)));
    const list2: ListNode = new ListNode(1, new ListNode(1, new ListNode(1, null)));
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 1,
          next: {
            val: 1,
            next: {
              val: 1,
              next: {
                val: 1,
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
    const list1: ListNode = new ListNode(5, null);
    const list2: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, null))),
    );
    const result = mergeTwoListsRecursive(list1, list2);
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
              next: null,
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // Interleaving values
    const list1: ListNode = new ListNode(1, new ListNode(3, new ListNode(5, null)));
    const list2: ListNode = new ListNode(2, new ListNode(4, new ListNode(6, null)));
    const result = mergeTwoListsRecursive(list1, list2);
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
                val: 6,
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
    // One list much longer
    const list1: ListNode = new ListNode(-1, null);
    const list2: ListNode = new ListNode(
      0,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))),
    );
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = {
      val: -1,
      next: {
        val: 0,
        next: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                val: 4,
                next: {
                  val: 5,
                  next: null,
                },
              },
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    // Already in order without interleaving (all list1 before list2)
    const list1: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const list2: ListNode = new ListNode(4, new ListNode(5, new ListNode(6, null)));
    const result = mergeTwoListsRecursive(list1, list2);
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
                val: 6,
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
    // Single element vs single element
    const list1: ListNode = new ListNode(2, null);
    const list2: ListNode = new ListNode(1, null);
    const result = mergeTwoListsRecursive(list1, list2);
    const expectedResult = {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    };

    expect(result).toEqual(expectedResult);
  });
});
