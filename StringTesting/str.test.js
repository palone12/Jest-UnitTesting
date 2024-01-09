const testingString = require("./str");

test("string test case", () => {
  expect(testingString()).toMatch("Hello");
});
