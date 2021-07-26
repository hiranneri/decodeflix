const EspectadoresRepository = require('../../banco/models')
class Espectadores{
    constructor({id, nome, dataCriacao, dataAtualizacao}){
        this.id = id,
        this.nome = nome,
        this.dataCriacao = dataCriacao,
        this.dataAtualizacao = dataAtualizacao
    }
    async salvar(){
        const espectadorCadastrado =  await EspectadoresRepository.espectadores.create(this);        
        this.atualizarEspectadorCadastrado(espectadorCadastrado);
        return espectadorCadastrado;
     
    }
    atualizarEspectadorCadastrado(espectadorCadastrado){
        this.id = espectadorCadastrado.id;
        this.nome = espectadorCadastrado.nome;
        this.genero = espectadorCadastrado.genero;
    }
    static async listar(){
        const espectadores = await EspectadoresRepository.espectadores.findAll();
        return espectadores;
    }



}
module.exports = Espectadores;