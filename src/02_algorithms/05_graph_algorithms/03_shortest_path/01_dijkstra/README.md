# Dijkstra Algorithm

Greedy algorithm for finding the shortest path from a starting node to all other nodes in a weighted graph with non-negative edge weights.

It finds the shortest paths by always selecting the nearest unvisited node and updating the distances to its neighbors.

## Pseudocode

```
//  graph = {
//    NODE_KEY: [(NEIGHBOR, WEIGHT),],
//  }

graph = {
  A: [(B, 4), (C, 2)],
  B: [(A, 4), (C, 5), (D, 10)],
  ...
}

DIJKSTRA(graph, source):
  FOR EACH node IN graph:
    distances[node] = ∞
    visited[node] = FALSE

  distances[source] = 0

  unvisited = LIST OF ALL nodes IN graph

  WHILE unvisited IS NOT empty:
    current = node IN unvisited with the smallest distances // Critical point
    REMOVE current FROM unvisited
    visited[current] = TRUE

    // Iterate neighbors of each unvisited node
    FOR EACH (neighbor, weight) IN graph[current]:

      // If neighbor was not visited, check distance.
      IF visited[neighbor] == FALSE:
        new_distance = distances[current] + weight

        // If resulting distance is lower than current, update.
        IF new_distance < distances[neighbor]:
          distances[neighbor] = new_distance

  return distances
```

## Explanation

- Initialize arrays to store, for each node, both the visited nodes and the distances from the source.
- Start from the source node, initializing its distance to 0 and all others to infinity.
- Get all nodes, which at this point are unvisited, and store them in an array.
- Continue processing as long as unvisited array has items.
- Use the node with smallest distance as current, remove it from `unvisited` array and mark it as `visited`.
- Iterate all neighbors of current node:
  - If is not visited, add its distance with its weight.
  - If the result is greater than its current distance, update it.
- Return a map with all the distances from the source.

## Characteristics

### Time Complexity:

- With binary heap: `O((V + E) log V)`
- With array (naïve): `O(V²)`
- Where `V` is the number of vertices and `E` is the number of edges.

### Space Complexity:

- `O(V + E)` for graph representation and distance map.
- Priority queue adds `O(V)` additional space.

## Notes

- Cannot be used with negative edge weights: for this case, use Bellman-Ford instead.
- Commonly used in:
  - GPS navigation
  - Network routing protocols
  - Game AI pathfinding
