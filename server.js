const app = require('./src/app');
const port = 8000;

app.listen(port, function(){ //Servidor escutar a porta
    console.log(`API está funcionando na porta ${port}`)
}); 