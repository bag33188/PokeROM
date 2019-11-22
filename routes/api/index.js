const express = require('express');

const router = express.Router();

const html = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Pok&eacute;ROM API</title>
    <style type="text/css">
      body {
        font-family: Roboto, Arial, Verdana, sans-serif;
      }
      #heading-title {
        margin-top: 2rem;
      }
      .container-wrapper {
        text-align: center;
      }
    </style>
    <script type="text/javascript">
      console.error('Please use a valid Pok\u00E9ROM API endpoint.');
    </script>
  </head>
  <body>
    <div class="container-wrapper">
      <h1 id="heading-title">Please use a valid Pok&eacute;ROM API endpoint.</h1>
    </div>
  </body>
</html>
`;

router.all('/*', (req, res) => {
  res.status(300).send(html);
});

module.exports = router;
