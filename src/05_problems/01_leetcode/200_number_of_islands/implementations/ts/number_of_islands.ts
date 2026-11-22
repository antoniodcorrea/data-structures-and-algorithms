export function numberOfIslands(grid: string[][]): number {
  let islands = 0;

  const sink = (i: number, j: number): void => {
    if (!grid[i] || !grid[i][j] || grid[i][j] === '0') return;
    grid[i][j] = '0';

    sink(i, j + 1);
    sink(i + 1, j);
    sink(i, j - 1);
    sink(i - 1, j);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') continue;
      islands += 1;

      sink(i, j);
    }
  }

  return islands;
}
