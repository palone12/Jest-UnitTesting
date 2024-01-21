const sum = require("./sum");
const objectTesting = require("./Obj");

test("Test Case 1", () => {
  expect(sum(15, 15)).toBe(30);
});
test("Test Case 2", () => {
  expect(sum(200, 33)).toBe(233);
});

test("Object Testing", () => {
  expect(objectTesting()).toEqual({ name: "Pranay" });
});
