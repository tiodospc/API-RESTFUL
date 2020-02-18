const express = require('express')
const app = express()

app.get('/produtos', function(req, res){
    res.send('Hello world')
});







app.listen(3001, function(){
    console.log('Servidor rodando')   
})