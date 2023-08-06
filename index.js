/*Objetivo: fazer primeiro deploy */
const express = require('express'); 
const app=express();

//Rota
app.get('/',function(req,res){ //requisição do usuário , resposta (arquivo, html, texto,etc)
    res.send('Hello, world!')
})

//ouvir conexões da porta especificada
app.listen(process.env.PORT || 3000)
