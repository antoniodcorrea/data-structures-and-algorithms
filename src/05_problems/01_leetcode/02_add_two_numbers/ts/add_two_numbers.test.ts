import { addTwoNumbers, ListNode } from './add_two_numbers';

describe('addTwoNumbers', () => {
  test('Returns the correct result', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(7, new ListNode(0, new ListNode(8)));
    console.log('test::result: ', result);
    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(0);

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))),
      ),
    );
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))),
        ),
      ),
    );

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(5);
    const l2 = new ListNode(5);
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(0, new ListNode(1));

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(1, new ListNode(0, new ListNode(1)));
    const l2 = new ListNode(9);
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(0, new ListNode(1, new ListNode(1)));

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(0, new ListNode(1));
    const l2 = new ListNode(0, new ListNode(1));
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(0, new ListNode(2));

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))));
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(7, new ListNode(0, new ListNode(8, new ListNode(9))));

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(2);
    const l2 = new ListNode(3);
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(5);

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const l1 = new ListNode(9, new ListNode(9));
    const l2 = new ListNode(1);
    const result = addTwoNumbers(l1, l2);
    const expectedResult = new ListNode(0, new ListNode(0, new ListNode(1)));

    expect(result).toEqual(expectedResult);
  });
});
