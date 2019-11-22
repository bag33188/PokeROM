const fs = require('fs');

const certificate = fs
  .readFileSync('database/mongodb.pem', 'utf8')
  .split('\n')
  .slice(0, 35)
  .join('\n');
const certificateKey = fs
  .readFileSync('database/mongodb.pem', 'utf8')
  .split('\n')
  .splice(35, 61)
  .join('\n');
const certificateAuthority = fs.readFileSync('database/mongodb.crt', 'utf8');

module.exports = {
  certificate,
  certificateKey,
  certificateAuthority
};
