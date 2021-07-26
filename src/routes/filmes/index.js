const router = require('express').Router()
const FilmesController = require('../../controllers/FilmeController');

router.get('/', async (requisicao, resposta, proximo)=>{
    try {
        const filmes = await FilmesController.listar();
        return resposta.status(200).json({filmes})
        
    } catch (erro) {
        proximo(erro)
    }
})

router.post('/', async (requisicao,resposta,proximo) =>{
    try {
        const filme = Object.assign({}, requisicao.body)
        let filmeCadastrado =  FilmesController.cadastrar(filme)
        return resposta.status(201).json({filme:filmeCadastrado})
        
    } catch (erro) {
        proximo(erro)
    }
});



module.exports = router;