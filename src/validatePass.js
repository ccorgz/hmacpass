const crypto = require("crypto");

function validatePass(password, hash, salt) {
  const derivedHash = crypto.createHmac("sha512", Buffer.from(salt, "base64")).update(password).digest("base64");

  const hashBytes = Buffer.from(hash, "utf8");
  const derivedBytes = Buffer.from(derivedHash, "utf8");

  if (hashBytes.length !== derivedBytes.length) return false;

  for (let i = 0; i < hashBytes.length; i++) {
    if (hashBytes[i] !== derivedBytes[i]) {
      return false;
    }
  }

  return true;
}

module.exports = validatePass;
