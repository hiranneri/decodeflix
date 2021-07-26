const router = require('express').Router()
const EspectadoresController = require('../../controllers/EspectadoresController');
const validacao = require('../../middlewares/Espectadores/index').validacao

router.get('/', async (requisicao, resposta, proximo)=>{
    try {
        const espectadores = EspectadoresController.listar();
        return resposta.status(200).json(espectadores)
        
    } catch (erro) {
        proximo(erro)
    }
})

router.post('/', validacao, async (requisicao,resposta,proximo) =>{
    try {
        const espectador = Object.assign({}, requisicao.body)
        let espectadorCadastrado =  EspectadoresController.cadastrar(espectador)
        return resposta.status(201).json({espectador:espectadorCadastrado})        
    } catch (erro) {
        proximo(erro)
    }
});



module.exports = router;