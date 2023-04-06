const { hasSubscribers } = require("diagnostics_channel");
const hash_password = require("../helpers/hash_password");

const usersJsonData = require('./users.json');

for (const user of usersJsonData) {
  console.log(user["password"]);

  hash_password.hashPassword(user["password"])
  .then((hash) => {
    user["password"] = hash
  })
  .catch((err) => {
    console.error('Error hashing password:', err);
  });
}

console.log(usersJsonData);