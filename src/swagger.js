import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        version: "1.0.0",
        title: "Minha API",
        description: "API de exemplo - ADS FATEC"
    },

    servers: [
        {url: 'http://localhost:3000'},
        {url: 'https://ling-prog-aula-10.onrender.com'}
    ]
};

const outputFile = './swagger-output.json';
const endpointsFile = ['./server.js'];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFile, doc)

