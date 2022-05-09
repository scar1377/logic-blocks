const sonarSweepPlus = require("../sonarSweepPlus");

describe("sonarSweepPlus", () => {
  test("should return 0 when passed an array with its length less than 4", () => {
    expect(sonarSweepPlus([1, 2, 3])).toBe(0);
  });
  test("should return 0 when passed an array with 4 elements, sum of the first 3 is greater than the sum of the last 3", () => {
    expect(sonarSweepPlus([4, 1, 2, 3])).toBe(0);
  });
  test("should return 0 when passed an array with 4 elements, sum of the first 3 is less than the sum of the last 3", () => {
    expect(sonarSweepPlus([1, 2, 3, 4])).toBe(1);
  });
  test("should return a number when passed an array with multiple elements, sum of 3 respectively is increased multiple times", () => {
    expect(sonarSweepPlus([1, 2, 3, 4, 5])).toBe(2);
    expect(
      sonarSweepPlus([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
    ).toBe(5);
  });
  test("input doesn't mutate", () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const expected = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(sonarSweepPlus(input)).toBe(5);
    expect(input).toEqual(expected);
  });
});
