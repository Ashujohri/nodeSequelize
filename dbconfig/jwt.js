const { expressjwt: expressjwt } = require("express-jwt");
const config = require("../nodemon.json");

function jwt() {
  const { secret } = config;
  return expressjwt({ secret, algorithms: ["sha1", "HS256", "RS256"] }).unless({
    path: [],
  });
}

module.exports = jwt;
