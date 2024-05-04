const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {config} = require('dotenv')
config()

const bookRoutes = require('./routes/books.routes')

const app = express()
app.use(bodyParser.json())

//Conectando a la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;

app.use('/books', bookRoutes)

const port = process.env.port || 3000

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})