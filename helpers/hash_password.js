const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}
async function compareBPasswords(password, hash) {
  const isPasswordValid = await bcrypt.compare(password, hash);
  return isPasswordValid;
}
module.exports = {
  hashPassword,
  compareBPasswords
};