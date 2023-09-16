const mongoose = require('mongoose');

const conectarMongodb = async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        //await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
        return "Conectado ao banco de dados com sucesso";
    }catch(erro){
        return "Erro ao efetuar a conexão " + erro 
    }
}

module.exports = conectarMongodb


