function testingString() {
  return "Hello";
}

function testCapitalize(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

module.exports = { testCapitalize, testingString, reverseStr };
