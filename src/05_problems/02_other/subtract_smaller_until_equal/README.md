# Subtract the Smaller Number Until Equal

Given two positive integers `a` and `b`, repeat the following steps:

1. If `a > b`, set `a` to `a - b`.
2. If `a < b`, set `b` to `b - a`.
3. If `a == b`, return `(a, b)`.

### Example 1:

- Input: `a = 1635`, `b = 1413`
- Output: `(3, 3)`

### Example 2:

- Input: `a = 1`, `b = 1`
- Output: `(1, 1)`
