const sum = require("./sum");
test("Test Case 1", () => {
  expect(sum(10, 20)).toBe(30);
});
test("Test Case 2", () => {
  expect(sum(200, 33)).toBe(233);
});
