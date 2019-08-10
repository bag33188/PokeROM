const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swagger-definition.json');

// Swagger Definition: swagger doc info object
// Like the one described here: https://swagger.io/specification/#infoObject
// './docs/**/*.yml'

// get api docs version
const version = swaggerDefinition.swaggerDefinition.info.version;

swaggerDefinition.swaggerDefinition.info.description = swaggerDefinition.swaggerDefinition.info.description.replace(
  '%VERSION%',
  version
);

// define swagger entity
const specs = swaggerJsDoc(swaggerDefinition);

/**
 * @summary API Docs middleware.
 * @description Configures middleware for Swagger Docs.
 * @param {object} app expressJS app object.
 */
const apiDocs = app =>
  app.use(`/api/docs/${version}`, swaggerUi.serve, swaggerUi.setup(specs));

// export docs and version
module.exports = [apiDocs, version];
