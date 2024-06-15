import express from 'express' //importa o express para o server
import routes from './routes/index.js'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json' with { type: "json"}//carrega o arquivo json


const app = express()
const PORT = 3000 //porta definida

app.use(express.json())//especificar express.json antes de definir as rotas
app.use('/api', routes)//busca o server e cai em index.js, que reorienta para puxar do banco de dados e devolver os produtos em formato json

app.use('/doc' , swaggerUi.serve, swaggerUi.setup(swaggerFile)) //Adiciona rota para visualizar o documento

//imputa no console npm start a mensagem em console.log
app.listen(PORT, () => {
    console.log(`O servidor está executando em http://localhost:${PORT}`)
})