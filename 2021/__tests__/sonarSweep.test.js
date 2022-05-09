const sonarSweep = require("../sonarSweep");

describe("sonarSweep", () => {
  test("should return 0 when passed an empty array", () => {
    expect(sonarSweep([])).toBe(0);
  });
  test("should return 0 when passed an array with single element in it", () => {
    expect(sonarSweep([1])).toBe(0);
  });
  test("should return 0 when the passing array's second number is less than the first one in it", () => {
    expect(sonarSweep([1, 0])).toBe(0);
  });
  test("should return 1 when the passing array's second number is greater than the first one in it", () => {
    expect(sonarSweep([1, 2])).toBe(1);
  });
  test("should return a number when passed an array with the elements increased multiple times", () => {
    expect(sonarSweep([1, 2, 3])).toBe(2);
    expect(sonarSweep([1, 2, 3, 5, 6, 4])).toBe(4);
    expect(sonarSweep([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(
      7
    );
  });
  test("input doesn't mutate", () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const expected = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(sonarSweep(input)).toBe(7);
    expect(input).toEqual(expected);
  });
});
