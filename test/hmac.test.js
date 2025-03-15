const createPass = require("../src/createPass");
const validatePass = require("../src/validatePass");

test("should validate a correct password", () => {
  const correctPassword = "hmacpass";

  const { hash, salt } = createPass(correctPassword);

  const isValid = validatePass(correctPassword, hash, salt);

  expect(isValid).toBe(true);
});

test("should reject an incorrect password", () => {
  const correctPassword = "hmacpass";
  const wrongPassword = "hmacwrongpass";

  const { hash, salt } = createPass(correctPassword);

  const isValid = validatePass(wrongPassword, hash, salt);

  expect(isValid).toBe(false);
});
