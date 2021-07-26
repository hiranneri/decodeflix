const VisualizacaoRepository = require('../../banco/models')

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
    


}
module.exports = Visualizacao;