pub fn mystery_algorithm(mut a: i128, mut b: i128) -> (i128, i128) {
  match a {
    x if x == b => return (a, b),
    x if x > b => a -= b,
    x if x < b => b -= a,
    _ => (),
  }

  mystery_algorithm(a, b)
}
