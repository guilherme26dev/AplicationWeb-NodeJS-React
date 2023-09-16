const conectarMongodb = require('../utils/mongoose')
const sequelize = require('../utils/sequelize')

//escolher se o banco é relacional ou não relacional
const dbChose = async (banco) =>{    
    if(banco === "true"){
        console.log("Banco de dados não relacional")
        const bancoCon = await conectarMongodb()
        await console.log(bancoCon)
    } else{
        console.log("Banco de dados relacional")
        bancoCon = await sequelize(process.env.NAME,
                                   process.env.USER,
                                   process.env.HOST,
                                   process.env.PASSWORD,
                                   process.env.PORT,
                                   process.env.TYPE)
        await console.log(bancoCon)
    }

}

module.exports = dbChose