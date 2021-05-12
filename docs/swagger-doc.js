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

function parseTermsOfService(env) {
  const tosPath =
    env !== 'production'
      ? 'https://1drv.ms/t/s!AmuGEkjVxD0JhslDktOegP93OxrK_g?e=55mFBA'
      : '/Terms_of_Service.txt';
  const tosRegExp = /((?:<%(?:[=#]?))(?:\s?)(?:TOS)(?:\s?)(?:%>))/i;
  const keys = ['swaggerDefinition', 'info', 'termsOfService'];
  swaggerDefinition[keys[0]][keys[1]][keys[2]] = swaggerDefinition[keys[0]][
    keys[1]
  ][keys[2]].replace(tosRegExp, tosPath);
  return tosPath;
}

// parse api docs version in description
parseVersion(version);

parseTermsOfService(process.env.NODE_ENV);

// define swagger entity
const specs = swaggerJsDoc(swaggerDefinition);

const apiDocs = app =>
  app.use(`/api/docs/${version}`, swaggerUi.serve, swaggerUi.setup(specs));

// export docs and version
module.exports = [apiDocs, version];
