const FilmeRepository = require('../../banco/models')
const VisualizacoesRepository = require('../../banco/models')

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
    async listaPorId(){
        const filme = await FilmeRepository.filmes.findOne({
            where:{
                id: Number(this.id)
            }
        })
        if(filme){
            return filme

        }else{
            throw new NaoEncontrado(`Não foi encontrado o filme com o id ${id}`);
        }
    }
    async listarEspectadoresPorFilme(){
        let total=0;
        const filmes = await VisualizacoesRepository.visualizacoes.findAll({
            where:{
                filmes_id: Number(this.id)
            }
        })
        if(filmes){
            filmes.forEach(filme => {
                total++;
            });
            return total
        }else{
            throw new NaoEncontrado('Nenhum filme foi visualizado')
        }
    }


}
module.exports = Filme;