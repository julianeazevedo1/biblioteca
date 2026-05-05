const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/livroController');

router.get('/livros', LivroController.listar);
router.get('/livros/:id', LivroController.buscarPorId);
router.post('/livros', LivroController.cadastrar);
router.put('/livros/:id', LivroController.update);
router.patch('/livros/:id/disponivel', LivroController.patchStatus);
router.delete('/livros/:id', LivroController.deletar);

module.exports = router;