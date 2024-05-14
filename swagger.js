const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "API Escola",
        description: "Uma API de cadastro de usuários e locais na natureza através de uma API externa. Utilizando javascript, express, sequelize, node.js e postgres.",
        version: "1.0.0"
    },
    host: 'localhost:3000',
    security: [{ "apiKeyAuth": [] }],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header', // can be 'header', 'query' or 'cookie'
            name: 'authorization', // name of the header, query parameter or cookie
            description: 'Token de Autenticação'
        }
    }
};

const outputFile = './src/routes/swagger.json';
const routes = ['./src/server.js'];

swaggerAutogen(outputFile, routes, doc);