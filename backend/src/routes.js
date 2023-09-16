express = require('express')
routes = express.Router()

routes.get("/", (req, res)=>{
    res.json({message : "Página inicial do servidor"})
})

module.exports = routes