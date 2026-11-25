# 253 Meeting Rooms II

https://leetcode.com/problems/meeting-rooms-ii

https://neetcode.io/problems/meeting-schedule-ii/question

Given an array of meeting time `intervals` where `intervals[i] = [start_i, end_i]`, return **the
minimum number of rooms** required to schedule all meetings without any conflicts.

Note: A meeting that ends at the same time another one starts does not conflict with it. For
example, `[0,8]` and `[8,10]` can share a room.

### Example 1:

- Input: `intervals = [[0,40],[5,10],[15,20]]`
- Output: `2`

Explanation: One room holds `[0,40]`, and the other holds `[5,10]` and `[15,20]`.

### Example 2:

- Input: `intervals = [[4,9]]`
- Output: `1`

Constraints:

- `0 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `0 <= start_i < end_i <= 10^6`
