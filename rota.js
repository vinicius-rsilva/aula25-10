const express = require("express");
const rota =express();
const bodyParser = require("body-parser")
const Ponto = require("./registro")

rota.use(express.static('./'));

rota.use(bodyParser.urlencoded({extended: false}))
rota.use(bodyParser.json())

rota.get('/', function(req, res){
    res.sendFile(__dirname+ 'index.html');
});

rota.post('/formulario', function(req, res){
    Ponto.create({
        dataponto: req.body.dtentrada,
        tipoponto: "Entrada",
        observacao: req.body.obs
    }).then(function(){
        res.redirect('/teste.html')
    }).catch(function(erro){
        res.send("Erro: Ponto não foi registrado"+ erro )
    })
})

    rota.listen(3000, ()=>{
        console.log('Servidor iniciado')

    });
