const cors = require('cors');

module.exports = cors({
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://pokerom-broccolini.herokuapp.com'
      : 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  headers: ['Accept', 'Accept-Language', 'Authorization', 'Content-Type'],
  credentials: true
});
