# hmacpass 🔐

A lightweight and secure Node.js library for hashing and verifying passwords using HMAC-SHA512 with salt.

## Installation

Install via npm:

```sh
npm install hmacpass
```

Or using Yarn:

```sh
yarn add hmacpass
```

## How It Works

### Password Hashing Strategy
`hmacpass` utilizes HMAC-SHA512 with a randomly generated salt to create a secure password hash.
- The salt ensures that identical passwords produce different hashes.
- HMAC (Hash-based Message Authentication Code) provides cryptographic security.

## Usage

### 1. Hashing a Password

```javascript
import { createPass } from "hmacpass";
// or
import hmacpass from "hmacpass";

const password = "mySecurePassword";
const { salt, hash } = createPass(password);
// or
const { salt, hash } = hmacpass.createPass(password);

console.log("Salt:", salt);
console.log("Hash:", hash);
```

#### What Happens?
- Generates a **random salt**.
- Hashes the password using **HMAC-SHA512**.
- Returns both the **salt** and **hash** for storage.

### 2. Verifying a Password

```javascript
import { validatePass } from "hmacpass";
// or
import hmacpass from "hmacpass";

const isValid = validatePass("mySecurePassword", salt, hash);
// or
const isValid = hmacpass.validatePass("mySecurePassword", salt, hash);

console.log("Password is valid:", isValid);
```

#### How Does Verification Work?
- The function rehashes the input password using the stored salt.
- Compares the generated hash with the stored hash.
- Returns `true` if they match, `false` otherwise.

## Example Use Case

A common scenario is storing user credentials in a database:

1. **User Registration:**
   - Hash the password and store `{ salt, hash }` in the database.
2. **User Login:**
   - Retrieve salt and hash from the database and verify the input password.

## Security Considerations

✅ Uses HMAC-SHA512 for cryptographic security.  
✅ Protects against rainbow table attacks with unique salts.  
✅ Suitable for authentication systems and secure password storage.  

## License

MIT License