const PreenchimentoIncorreto = require('../erros/PreeenchimentoIncorreto')
const Filme = require('../model/Filme')

module.exports = {
    listar(){
        const filmes = ['DocodeFlix', 'Homem-Aranha', 'Batman'];
        return filmes;
    },
    cadastrar(filme){
        this.validarCampos(filme);
        const filmeCadastrado = new Filme(filme)
        filmeCadastrado.salvar();
        return filmeCadastrado;
    },
  
    validarCampos(filme){
        const campos = ['nome'];
        const dados = filme
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
    }
}