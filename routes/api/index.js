const express = require('express');
const yaml = require('js-yaml');
const fs = require('fs');

const router = express.Router();

const naturesDoc = yaml.safeLoad(fs.readFileSync('./docs/paths/Natures.yml'));
const ratingsDoc = yaml.safeLoad(fs.readFileSync('./docs/paths/Ratings.yml'));
const usersDoc = yaml.safeLoad(fs.readFileSync('./docs/paths/Users.yml'));
const optionsDoc = yaml.safeLoad(fs.readFileSync('./docs/paths/Options.yml'));
const romsDoc = yaml.safeLoad(fs.readFileSync('./docs/paths/Roms.yml'));
const versionDoc = yaml.safeLoad(fs.readFileSync('./docs/paths/Version.yml'));

const docs = [
  naturesDoc,
  ratingsDoc,
  romsDoc,
  optionsDoc,
  usersDoc,
  versionDoc
];

let pathsArr = [];

docs.forEach(doc => {
  pathsArr.push(Object.keys(doc.paths));
});

pathsArr = pathsArr.flat(1).sort();

let listItems = '';

for (path of pathsArr) {
  listItems += `<li style="list-style-type: none;"><code>${path}</code></li>\n`;
}

const htmlDoc = `
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
      <ul>
        ${listItems.replace(/(\n)$/, '')}
      </ul>
    </div>
  </body>
</html>
`.replace(/^(\n)/, '');

router.all('/*', (req, res) => {
  res.status(300).send(htmlDoc);
});

module.exports = router;
