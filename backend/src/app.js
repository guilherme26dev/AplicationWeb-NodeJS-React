const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv").config();

//caminhos
const routes = require('./routes.js')
const logs = require('./utils/morgan.js')
const choseDB = require('./database/dbChose.js')

//utilizando bodyParser
app.use(bodyParser.json())

logs(app)

try{
    app.listen('3000', async () =>{
        console.log("logado em http://localhost:3000 ")
        app.use(routes)
        await choseDB(process.env.BANCO_RELACIONAL)
      
        

    })
}catch(error){
    console.log("Erro ao inicializar o sistema")
}