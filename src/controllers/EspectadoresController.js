const Espectadores = require('../model/Espectadores')
const Filme = require('../model/Filme')
const Visualizacao = require('../model/Visualizacao')

module.exports = {
    async listar(){        
        let espectadoresCadastrados = await Espectadores.listar()
        return espectadoresCadastrados;
    },
    async cadastrar(espectador){
        const espectadorCadastrado = new Espectadores(espectador)
        await espectadorCadastrado.salvar();
        return espectadorCadastrado;
    },
    async marcarVisto(dados){
        const dadosEspectador = dados.espectador
        const dadosFilme = dados.filme
        const espectador = new Espectadores(dadosEspectador)
        await espectador.listaPorId()
        const filme = new Filme(dadosFilme)
        await filme.listaPorId()

        const visualizacao = new Visualizacao({idFilme: filme.id, idEspectadores: espectador.id})
        visualizacao.salvar()
    }

}