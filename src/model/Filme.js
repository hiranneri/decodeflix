const FilmeRepository = require('../../banco/models')

class Filme{
    constructor({id, nome, genero, dataCriacao, dataAtualizacao}){
        this.id = id,
        this.nome = nome,
        this.genero = genero;
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao
    }
    async salvar(){
        const filmeCadastrado =  await FilmeRepository.filmes.create(this);        
        this.atualizarFilmeCadastrado(filmeCadastrado);
        return filmeCadastrado;
     
    }
    atualizarFilmeCadastrado(filmeCadastrado){
        this.id = filmeCadastrado.id;
        this.nome = filmeCadastrado.nome;
        this.genero = filmeCadastrado.genero;
    }


}
module.exports = Filme;