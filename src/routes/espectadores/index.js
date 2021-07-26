const router = require('express').Router()
const EspectadoresController = require('../../controllers/EspectadoresController');
const validacao = require('../../middlewares/Espectadores/index').validacao

router.get('/', async (requisicao, resposta, proximo)=>{
    try {
        const espectadores = await EspectadoresController.listar();
        return resposta.status(200).json({espectadores})
        
    } catch (erro) {
        proximo(erro)
    }
})

router.post('/', validacao, async (requisicao,resposta,proximo) =>{
    try {
        const espectador = Object.assign({}, requisicao.body)
        let espectadorCadastrado = await EspectadoresController.cadastrar(espectador)
        return resposta.status(201).json({espectador:espectadorCadastrado})        
    } catch (erro) {
        proximo(erro)
    }
});

router.post('/:id/filme/:idFilme/visto', async(requisicao,resposta, proximo)=>{
    try {
        let {id, idFilme} = requisicao.params;
        let {filme} = requisicao.body;
        const dados = Object.assign({}, {espectador: {id}}, {filme:{id: idFilme, nome: filme}})
        await EspectadoresController.marcarVisto(dados)
        return resposta.status(200).json({message: "Marcado como visto"})   
    } catch (error) {
        proximo(error)
    }
} )





module.exports = router;