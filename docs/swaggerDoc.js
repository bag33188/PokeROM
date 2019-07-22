const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDefinition.json');

// Swagger Definition: swagger doc info object
// Like the one described here: https://swagger.io/specification/#infoObject
// './docs/**/*.yml'

switch (process.env.NODE_ENV) {
  case undefined:
  case 'development':
    swaggerDefinition.swaggerDefinition.info.contact.url =
      'http://localhost:4200/docs';
    break;
  case 'production':
    swaggerDefinition.swaggerDefinition.info.contact.url =
      'https://pokerom-broccolini.herokuapp.com/docs';
    break;
  default:
    swaggerDefinition.swaggerDefinition.info.contact.url = '/docs';
    break;
}

// define swagger entities
const specs = swaggerJsDoc(swaggerDefinition);
const version = swaggerDefinition.swaggerDefinition['info']['version'];

/**
 * @summary API Docs middleware.
 * @description Configures middleware for Swagger Docs.
 * @param {object} app expressJS app object.
 */
const apiDocs = app => {
  app.use(`/api/docs/${version}`, swaggerUi.serve, swaggerUi.setup(specs));
};

// export docs and version
module.exports = [apiDocs, version];
