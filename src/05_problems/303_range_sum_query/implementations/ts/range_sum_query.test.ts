import { NumArray } from './range_sum_query';

describe('NumArray', () => {
  test('Instantiates', () => {
    const nums = [-2, 0, 3, -5, 2, -1];
    const numArray = new NumArray(nums);
    const expectedPrefix = [0, -2, -2, 1, -4, -2, -3];

    expect(numArray.prefix).toEqual(expectedPrefix);
  });

  test('Returns the correct result in the sum', () => {
    const nums = [-2, 0, 3, -5, 2, -1];
    const numArray = new NumArray(nums);

    const result_1 = numArray.sumRange(0, 2);
    const expectedResult_1 = 1;
    expect(result_1).toEqual(expectedResult_1);

    const result_2 = numArray.sumRange(2, 5);
    const expectedResult_2 = -1;
    expect(result_2).toEqual(expectedResult_2);

    const result_3 = numArray.sumRange(0, 5);
    const expectedResult_3 = -3;
    expect(result_3).toEqual(expectedResult_3);
  });
});
