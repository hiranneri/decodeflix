const EspectadoresRepository = require('../../banco/models');
const NaoEncontrado = require('../erros/NaoEncontrado');
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
    async listaPorId(){
        const espectador = await EspectadoresRepository.espectadores.findOne({
            where:{
                id: Number(this.id)
            }
        })
        if(espectador){
            return espectador

        }else{
            throw new NaoEncontrado(`Não foi encontrado o espectador com o id ${id}`);
        }
    }



}
module.exports = Espectadores;