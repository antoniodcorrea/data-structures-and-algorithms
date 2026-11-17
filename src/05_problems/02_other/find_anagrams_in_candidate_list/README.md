# Find Anagrams in a Candidate List

https://exercism.org/tracks/rust/exercises/anagram

An anagram is a rearrangement of letters to form a new word. Given a `word` and a list of
`candidates`, return the sublist of candidates that are anagrams of `word`.

The comparison is **case insensitive**: `"WOrd"` is the same as `"word"` or `"woRd"`.

A word is not an anagram of itself, so the result must not contain `word`, regardless of its case.

### Example 1:

- Input: `word = "listen"`, `candidates = ["enlists", "google", "inlets", "banana"]`
- Output: `["inlets"]`

### Example 2:

- Input: `word = "hello"`, `candidates = ["hello", "olleh"]`
- Output: `["olleh"]`
