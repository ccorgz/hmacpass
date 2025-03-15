const crypto = require("crypto");

function createPass(password) {
  const salt = crypto.randomBytes(128).toString("base64");
  const hash = crypto.createHmac("sha512", Buffer.from(salt, "base64")).update(password).digest("base64");

  return { hash, salt };
}

module.exports = createPass;
