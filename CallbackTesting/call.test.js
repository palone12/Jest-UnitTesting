const testing = require("./call");

test("Callback Test 1", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Hello");
      done();
    } catch (err) {
      done(err);
    }
  }
  testing(callback);
});
