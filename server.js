//APRIMORAR A APRESENTAÇAO DOS RESULTADOS 

const express = require('express');
const mysql = require ('mysql2');
const mysql_config = require ('./mysql_config');
const functions = require('./functions')
const app = express ();
const cors = require('cors'); 

app.listen(3000,()=>{
    console.log("Servidor no ar")
})

//mysql connection 
const connection = mysql.createConnection(mysql_config)

//criar uma funçao que ira paremetrizar as respostas da api
//para utilizar todos os endpoints vamos uma funçao para isso 

//criando o roteamento

//consumindo cors
app.use(cors());

app.get('/',(req,res)=>{
    //estabelecer a conexao para executar a query
    //vamos consumir a functions criada 
    connection.query("SELECT * FROM tasks",(err,results)=>{
        if(err){
            res.json(functions.response('error','Erro: '+err.message))
        }else{
            res.json(functions.response('seucess','tasks listados com sucesso', results))
        }
    })
})




