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

function parseVersion(apiVersion) {
  swaggerDefinition.swaggerDefinition.info.description = swaggerDefinition.swaggerDefinition.info.description.replace(
    '%VERSION%',
    apiVersion
  );
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
