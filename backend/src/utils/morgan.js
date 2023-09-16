const morganBody = require('morgan-body')
const fs = require('fs')
const path = require('path')

//criar arquivo de log

const criarLogs = (arquivo) =>{
    try{
        const log = fs.createWriteStream(
            path.join(__dirname, "../logs", 'expresss.log'), {flags: "a"}
        )
        
        morganBody(arquivo, {
            noColors: true,
            stream: log,
        })

    }catch(erro){
        console.log(erro)
    }

}

module.exports = criarLogs