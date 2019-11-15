const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const yaml = require('js-yaml');
const fs = require('fs');

// https://swagger.io/specification/#infoObject
const swaggerDefinition = yaml.safeLoad(
  fs.readFileSync('docs/swagger-definition.yml')
);

// get api docs version
const version = swaggerDefinition.swaggerDefinition.info.version;

/**
 * @name parseVersion
 * @summary Parses API Version
 * @description Parses the API Version embedded code in the swagger definition JSON object.
 * @param {string} apiVersion The version of the API.
 * @returns {string} The API's version.
 */
function parseVersion(apiVersion) {
  const versionRegExp = /((?:<%(?:[=#]?))(?:\s?)(?:VERSION)(?:\s?)(?:%>))/i;
  const keys = ['swaggerDefinition', 'info', 'description'];
  swaggerDefinition[keys[0]][keys[1]][keys[2]] = swaggerDefinition[keys[0]][
    keys[1]
  ][keys[2]].replace(versionRegExp, apiVersion);
  return apiVersion;
}

// parse api docs version in description
parseVersion(version);

// define swagger entity
const specs = swaggerJsDoc(swaggerDefinition);

const apiDocs = app =>
  app.use(`/api/docs/${version}`, swaggerUi.serve, swaggerUi.setup(specs));

// export docs and version
module.exports = [apiDocs, version];
