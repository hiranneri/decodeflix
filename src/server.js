require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const NaoEncontrado = require('./erros/NaoEncontrado')
const PreenchimentoIncorreto = require('./erros/PreeenchimentoIncorreto')
app.use(express.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();

})


const routerFilmes = require('./routes/filmes');
app.use('/api/filmes', routerFilmes);

const routerEspectadores = require('./routes/espectadores')
app.use('/api/espectadores', routerEspectadores);

app.use((erro, requisicao, resposta, proximo)=>{
  if(erro instanceof NaoEncontrado){
      return resposta.status(404).json({message:erro.message})
  }else if (erro instanceof PreenchimentoIncorreto){
      return resposta.status(400).json({message:erro.message})
  }else if(erro.code === '23505'){
      return resposta.status(400).json({message: 'Já existe um cadastro com estes dados'})
  } else{
      console.log(erro.message)
      return resposta.status(500).json({message: 'Ocorreu um erro interno. Tente novamente mais tarde'})
  }

})

module.exports = app