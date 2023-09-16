const con = require('sequelize')

const conectarSequelize = async (DB_NAME,
                                 DB_USER,
                                 DB_HOST,
                                 DB_PASSWORD,
                                 DB_PORT,
                                 DB_TYPE) =>{
    try{

     const sequelize = await new con.Sequelize(DB_NAME,
                                          DB_USER,
                                          DB_PASSWORD,{

        dialect: DB_TYPE,
        host: DB_HOST  
     });
     
     return await "conexão realizada com sucesso"
     

    }catch(erro){
        return await "impossivel conectar no banco" + erro
    }
}

module.exports = conectarSequelize;
