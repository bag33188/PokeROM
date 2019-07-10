const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDefinition.json');

// swagger doc info object
// Like the one described here: https://swagger.io/specification/#infoObject
const options = swaggerDefinition;
// './docs/**/*.yml'

// define swagger entities
const specs = swaggerJsDoc(options);
const version = options.swaggerDefinition['info']['version'];

/**
 * @summary API Docs middleware.
 * @description Configures middleware for Swagger Docs.
 * @param {object} app expressJS app object.
 */
const apiDocs = (app) => {
  app.use(`/api/docs/${version}`, swaggerUi.serve, swaggerUi.setup(specs));
};

// export docs and version
module.exports = [apiDocs, version];