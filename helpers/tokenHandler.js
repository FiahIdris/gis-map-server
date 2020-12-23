const jwt = require('jsonwebtoken');

function generateToken(payload) {
  const token = jwt.sign(payload, "cogitoergosum");

  return token
}

function decodeToken(token) {
  let decoded = jwt.verify(token, "cogitoergosum");
  if (decoded.email == undefined) {
    decoded = decoded
  } else {
    decoded = decoded.email
  }

  return decoded
}

module.exports = {
  generateToken,
  decodeToken
}
