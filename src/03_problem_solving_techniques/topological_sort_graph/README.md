# Topological Sort Graph

Finds a valid order of tasks in Directed Acyclic Graphs (DAG).

```javascript
// Course scheduling.
function findorder(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  prerequisites.forEach(([v, u]) => {
    graph[u].push(v);
    inDegree[v]++;
  });

  const queue = [];
  const order = [];

  inDegree.forEach((deg, i) => deg === 0 && queue.push(i));

  while (queue.length) {
    const course = queue.shift;
    order.push(course);

    graph[course].forEach((next) => {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    });
  }

  return order.length === numCourses ? order : [];
}
```
