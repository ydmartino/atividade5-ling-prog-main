import express from 'express' //importa o express para o server
import routes from './routes/index.js'

const app = express()
const PORT = 3000 //porta definida

app.use(express.json())
app.use('/api', routes)//busca o server e cai em index.js, que reorienta para puxar do banco de dados e devolver os produtos em formato json

//imputa no console npm start a mensagem em console.log
app.listen(PORT, () => {
    console.log(`O servidor está executando em http://localhost:${PORT}`)
})