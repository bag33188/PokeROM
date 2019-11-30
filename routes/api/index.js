const express = require('express');
const yaml = require('js-yaml');
const fs = require('fs');
const [, version] = require('../../docs/swagger-doc');

const docs = [
  yaml.safeLoad(fs.readFileSync('./docs/paths/Roms.yml')),
  yaml.safeLoad(fs.readFileSync('./docs/paths/Users.yml')),
  yaml.safeLoad(fs.readFileSync('./docs/paths/Natures.yml')),
  yaml.safeLoad(fs.readFileSync('./docs/paths/Ratings.yml')),
  yaml.safeLoad(fs.readFileSync('./docs/paths/Options.yml')),
  yaml.safeLoad(fs.readFileSync('./docs/paths/Version.yml'))
];

let paths = [];

docs.forEach(doc => paths.push(Object.keys(doc.paths)));

// NODE: the flat method only works with ES2019+
paths = paths.flat(1).sort();

let listItems = '';

for (const i in paths) {
  const path = paths[+i];
  listItems += `<li style="list-style-type: none;"><code>${path}</code></li>${
    +i === paths.length - 1 ? '' : '\n'
  }`;
}

const apiDocsHtml =
  process.env.NODE_ENV !== 'production'
    ? `<hr />\n<a href="/api/docs/${version}" target="_blank">API Docs</a>`
    : '';

let htmlDoc = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Pok&eacute;ROM API</title>
    <style type="text/css">
      :root {
        --plastic-pink: #e83e8c;
        --almost-black: #212529;
        --white: #fff;
        --anchor-blue: #007bff;
        --anchor-hover-blue: #0056b3;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          font-weight: 400;
          line-height: 1.5;
          font-size: 1rem;
          color: var(--almost-black);
          background-color: var(--white);
      }
      #heading-title {
        margin-top: 2rem;
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 0;
      }
      .container-wrapper {
        text-align: center;
      }
      code {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 1em;
        color: var(--plastic-pink);
        word-break: break-word;
      }
      a {
        color: var(--anchor-blue);
        text-decoration: none;
        background-color: transparent;
      }
      a:hover {
        color: var(--anchor-hover-blue);
        text-decoration: underline;
      }
      hr {
        box-sizing: content-box !important;
        height: 0;
        overflow: visible;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    </style>
    <script type="text/javascript">
      const eacute = '\\u00E9';
      console.error(\`Please use a valid Pok\$\{eacute\}ROM API endpoint.\`);
    </script>
  </head>
  <body>
    <div class="container-wrapper">
      <h1 id="heading-title">Please use a valid Pok&eacute;ROM API endpoint:</h1>
      <ul style="padding: 0;">
        ${listItems}
      </ul>
      ${apiDocsHtml}
    </div>
  </body>
</html>
`;

htmlDoc = htmlDoc
  .replace(/^(\n)/, '')
  .replace(/(\n)$/, '')
  .replace(/(\n(?:\s+)\n)/, '\n');

const router = express.Router();

router.all('/*', (req, res) => {
  res.status(300).send(htmlDoc);
});

module.exports = router;
