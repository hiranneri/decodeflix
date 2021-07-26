const PreenchimentoIncorreto = require('../erros/PreeenchimentoIncorreto')
const Espectadores = require('../model/Espectadores')

module.exports = {
    async listar(){        
        let espectadoresCadastrados = await Espectadores.listar()
        return espectadoresCadastrados;
    },
    async cadastrar(espectador){
        const espectadorCadastrado = new Espectadores(espectador)
        await espectadorCadastrado.salvar();
        return espectadorCadastrado;
    }

}