import { equationsPossible } from "./satisfiability_of_equality_equations";

describe("Satisfiability of Equality Equations", () => {
  test("Does not have contradictions", () => {
    const equations = ["a==b", "b==c", "c!=d"];
    const result = equationsPossible(equations);

    expect(result).toBeTruthy();
  });

  test("Does have contradictions", () => {
    const equations = ["a==b", "b==c", "c!=a"];
    const result = equationsPossible(equations);

    expect(result).toBeFalsy();
  });

  test("Does have contradictions", () => {
    const equations = ["a==b", "b!=a"];
    const result = equationsPossible(equations);

    expect(result).toBeFalsy();
  });
});
