const express = require('express');
const LivroController = require('./livroController');

const router = express.Router();

router.get('/livros', LivroController.listar);
router.get('/livros/:id', LivroController.buscarPorId);
router.post('/livros', LivroController.cadastrar);
router.put('/livros/:id', LivroController.update);
router.patch('/livros/:id', LivroController.patchStatus);
router.delete('/livros/:id', LivroController.deletar);

module.exports = router;