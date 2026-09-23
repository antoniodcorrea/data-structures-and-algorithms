# Depth-First Search (DFS)

Graph traversal algorithm that explores as far as possible along each branch before backtracking.
It uses a stack implicitly (recursion) or explicitly (manual stack) to track traversal.

Good for exploring all nodes and edges in a connected component, detecting cycles, or performing topological sorts —in Directed Acyclic Graphs (DAGs)—.

## Pseudocode

    // Edge list
    // graph = {
    //   NODE_KEY: [NEIGHBOR, ...],
    // }

    graph = {
      A: [B, C],
      B: [A, D],
      C: [A, D],
      D: [B, C],
    }

    DEPTH_FIRST_SEARCH(graph, start):
      visited = EMPTY_SET
      stack = [start]

      WHILE stack IS NOT EMPTY:
        node = stack.POP()

        IF node IN visited:
          CONTINUE

        visited.ADD(node)

        FOR neighbor IN REVERSE(graph[node]):
          IF neighbor NOT IN visited:
            stack.PUSH(neighbor)

## Explanation

- We use an explicit stack to simulate the recursive call stack of traditional Depth First Search.
- We maintain a `visited` set to avoid revisiting the same node, which also helps prevent infinite loops in cyclic graphs.
- The algorithm starts by pushing the `start` node onto the stack.
- While the stack is not empty:
  - Pop the top node.
  - If it hasn't been visited:
    - Mark it as visited.
    - Call the `visitNode` function (e.g., for printing, collecting, etc.).
    - Push its unvisited neighbors onto the stack.
- We reverse the neighbor list so that the leftmost or lowest-order nodes are visited first, mimicking recursive Depth First Search behavior.

This visits all nodes reachable from the starting node, using depth-first traversal order.

## Characteristics

### Time Complexity:

- `O(V + E)` where:
  - `V` = number of vertices
  - `E` = number of edges

Each node and edge is visited once in the worst case.

### Space Complexity:

- `O(V)` for the visited set.
- Up to `O(V)` recursive call stack space in the worst case (e.g., linear chain of nodes).

## Notes

- Does not guarantee shortest path (unlike BFS).
- Can be implemented iteratively with a stack (especially in languages without tail recursion optimization).
- Useful for:
  - Cycle detection
  - Topological sorting (Directed Acyclic Graphs)
  - Connectivity checking
  - Solving puzzles or mazes
