const PreenchimentoIncorreto = require('../../erros/PreeenchimentoIncorreto'); 

const validacao = (requisicao,resposta,next)=>{    
    const campos = ['nome'];
    const dados = requisicao.body;
    const dadosParaValidar = {}
    campos.forEach((campo)=>{
        const valor = dados[campo]
        if(typeof valor === 'string'){
            dadosParaValidar[campo] = valor
        }else{
            throw new PreenchimentoIncorreto(`O(s) campo(s) ${campo} não foram preenchidos corretamente`)
        }
    })
    if(Object.keys(dadosParaValidar).length === 0){
        throw new PreenchimentoIncorreto('Não foram fornecidos dados para atualizar')
    }
    next()

}



module.exports = {
   validacao
}