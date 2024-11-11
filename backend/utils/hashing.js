const bcrypt = require("bcryptjs");

const hashing = async (plainPassword) => {
  let salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword;
};


module.exports = hashing;
