# 6 Zigzag Conversion

https://leetcode.com/problems/zigzag-conversion

Given a string `s` and an integer `numRows`, arrange the characters of `s` in a zigzag pattern on `numRows` of rows.
Then read the pattern row by row to produce the converted string.

### Example 1:

- Input: `s = "PAYPALISHIRING"`, `numRows = 3`
- Output: `"PAHNAPLSIIGYIR"`

Explanation (visual):

```
P   A   H   N
A P L S I I G
Y   I   R
```

Reading row by row → `PAHNAPLSIIGYIR`.

### Example 2:

- Input: `s = "PAYPALISHIRING"`, `numRows = 4`
- Output: `"PINALSIGYAHRPI"`

Explanation (visual):

```
P     I     N
A   L S   I G
Y A   H R
P     I
```

Reading row by row → `PINALSIGYAHRPI`.

### Example 3:

- Input: `s = "A"`, `numRows = 1`
- Output: `"A"`

Constraints:

- `1 <= s.length <= 1000`
- `s` consists of English letters (both lowercase and uppercase), and may include `','` and `'.'`
- `1 <= numRows <= 1000`
