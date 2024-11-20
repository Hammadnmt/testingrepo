const bycrpt = require("bcryptjs");


async function comparePasswords(password, hashPassword) {
  return await bycrpt.compare(password, hashPassword);
}
module.exports = comparePasswords;
