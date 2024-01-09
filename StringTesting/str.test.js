const { testCapitalize, reverseStr, testingString } = require("./str");

test("string test case", () => {
  expect(testingString()).toMatch("Hello");
});

test("string Capital Case", () => {
  expect(testCapitalize("hello")).toMatch("Hello");
});

test("string reverse Case", () => {
  expect(reverseStr("hello")).toMatch("olleh");
});
