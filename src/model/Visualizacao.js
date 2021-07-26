const VisualizacaoRepository = require('../../banco/models');
const NaoEncontrado = require('../erros/NaoEncontrado');

class Visualizacao{
    constructor({id, idFilme, idEspectadores, dataCriacao, dataAtualizacao}){
        this.id = id,
        this.filmes_id = idFilme,
        this.espectadores_id = idEspectadores, 
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao
    }
    async salvar(){
        const filmeVisto =  await VisualizacaoRepository.visualizacoes.create(this);        
        this.atualizarFilmeVisto(filmeVisto);
        return filmeVisto;
     
    }
    atualizarFilmeVisto(filmeVisto){
        this.id = filmeVisto.id
        this.filmes_id = filmeVisto.filmes_id
        this.espectadores_id = filmeVisto.espectadores_id
        this.dataCriacao = filmeVisto.createdAt;
    }
    async filmesVistos(){
        let total=0;
        const filmes = await VisualizacaoRepository.visualizacoes.findAll({
            where:{
                espectadores_id: Number(this.espectadores_id)
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
module.exports = Visualizacao;