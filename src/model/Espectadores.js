class Espectadores{
    constructor({id, nome, dataCriacao, dataAtualizacao}){
        this.id = id,
        this.nome = nome,
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao
    }
    async salvar(){
        this.id = 1;           
        return this;             
    }



}
module.exports = Espectadores;