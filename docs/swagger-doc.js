const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swagger-definition.json');

// https://swagger.io/specification/#infoObject

// get api docs version
const version = swaggerDefinition.swaggerDefinition.info.version;

function parseVersion() {
  swaggerDefinition.swaggerDefinition.info.description = swaggerDefinition.swaggerDefinition.info.description.replace(
    '%VERSION%',
    version
  );
  return version;
}

// parse api docs version in description
parseVersion();

// define swagger entity
const specs = swaggerJsDoc(swaggerDefinition);

const apiDocs = app =>
  app.use(`/api/docs/${version}`, swaggerUi.serve, swaggerUi.setup(specs));

// export docs and version
module.exports = [apiDocs, version];
