const express = require('express');

const router = express.Router();

const html = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Pok&eacute;ROM API</title>
  </head>
  <body>
    <h1>Please use a valid Pok&eacute;ROM API endpoint.</h1>
  </body>
</html>
`;

router.all('/*', (req, res) => {
  res.status(300).send(html);
});

module.exports = router;
