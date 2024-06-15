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
    ],
    definitions: {
        AddOrUpdateUser: {
            email: "novoemail@email.com", name: "Novo email de usuário", age: 25
        },
        AddOrUpdateTask: {
            title: "Nova tarefa", userId: 1
        }
    }
}
const outputFile = './swagger-output.json';
const endpointsFile = ['./server.js'];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFile, doc)

