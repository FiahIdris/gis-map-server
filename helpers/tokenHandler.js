const jwt = require('jsonwebtoken');

function generateToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token
}

function decodeToken(token) {
  let decoded = jwt.verify(token, process.env.JWT_SECRET);
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
