const PreenchimentoIncorreto = require('../erros/PreeenchimentoIncorreto')
const Espectadores = require('../model/Espectadores')

module.exports = {
    listar(){
        const espectadores = ['Hiran','Neri'];
        return espectadores;
    },
    async cadastrar(espectador){
        const espectadorCadastrado = new Espectadores(espectador)
        await espectadorCadastrado.salvar();
        return espectadorCadastrado;
    }

}