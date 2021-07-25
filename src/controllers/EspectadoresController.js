const PreenchimentoIncorreto = require('../erros/PreeenchimentoIncorreto')
const Espectadores = require('../model/Espectadores')

module.exports = {
    listar(){
        const espectadores = ['Hiran','Neri'];
        return espectadores;
    },
    cadastrar(espectador){
        this.validarCampos(espectador);
        const espectadorCadastrado = new Espectadores(espectador)
        espectadorCadastrado.salvar();
        return espectadorCadastrado;
    },
  

}