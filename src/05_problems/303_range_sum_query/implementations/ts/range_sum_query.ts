export class NumArray {
  prefix: Array<number> = [];

  // Time: O(n) Space: O(n)
  constructor(nums: Array<number>) {
    const n = nums.length;
    this.prefix = [0];

    for (let i = 1; i < n + 1; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i - 1];
    }
  }

  // Time: O(1)
  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}
