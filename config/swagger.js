const swaggerJSDoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Budgey Backend",
            version: "0.0.1",
            description: "Docs for the budgey CRUD apis",
        },
        servers: [{ url: "http://localhost:5000" }]
    },
    apis: ["routes/*.js"]
}

const specs = swaggerJSDoc(options);

module.exports = specs;