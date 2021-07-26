const PreenchimentoIncorreto = require('../erros/PreeenchimentoIncorreto')
const Filme = require('../model/Filme')
const FilmeRepository = require('../../banco/models')

module.exports = {
    async listar(){
        const filmes = await FilmeRepository.filmes.findAll();
        return filmes;
    },
    async cadastrar(filme){
        let filmeCadastrado = new Filme(filme)
        await filmeCadastrado.salvar();    
        return filmeCadastrado;
    },
    async pesquisarEspectadoresPorFilme(dados){
        const dadosFilme = dados.filme
        const filme = new Filme(dadosFilme)
        const totalEspectadores = await filme.listarEspectadoresPorFilme();
        return {
            message: `${totalEspectadores} espectadores viram o filme`
        }
    }
}