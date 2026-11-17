pub fn reverse_string(s: &mut Vec<char>) {
  reverse_slice(s);
}

fn reverse_slice(s: &mut [char]) {
  let len = s.len();

  if len < 2 {
    return;
  }

  s.swap(0, len - 1);
  reverse_slice(&mut s[1..len - 1]);
}
