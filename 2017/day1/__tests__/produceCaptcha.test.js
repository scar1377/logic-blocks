const produceCaptcha = require("../produceCaptcha");

describe("produceCaptcha", () => {
  it("should return 0 when passes a string less than 2 digits", () => {
    expect(produceCaptcha("")).toBe(0);
    expect(produceCaptcha("1")).toBe(0);
  });
  it("should return the repeated number when passes a string with 2 different digits", () => {
    expect(produceCaptcha("12")).toBe(0);
  });
  it("should return the sum of the continuous repeated number when passes a string with some repeated digits in it", () => {
    expect(produceCaptcha("1122")).toBe(3);
    expect(produceCaptcha("112233")).toBe(6);
  });
  it("should return the sum of the repeated number when passes a number with the same number for both the first and the last digit", () => {
    expect(produceCaptcha("11")).toBe(2);
    expect(produceCaptcha("1111")).toBe(4);
    expect(produceCaptcha("91212129")).toBe(9);
  });
  it("should return 0r when passes a number without any repeated digits", () => {
    expect(produceCaptcha("1234")).toBe(0);
    expect(produceCaptcha("12")).toBe(0);
  });
});
