const express = require("express"); //Criando aplicação (indicação de rota)
const app = express();

//rotas -redirecionar a rota
const index = require("./routes/index");
const tarefas = require("./routes/tarefasRoute");

//Arquivo de inicialização da requisição (middleware)
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
});

app.use('/', index);
app.use('/tarefas', tarefas);

module.exports = app;