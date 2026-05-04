const LivroController = {
  listar(req, res) {
    return res.json({ mensagem: 'Listando livros' });
  },

  buscarPorId(req, res) {
    return res.json({ mensagem: 'Buscando livro por ID' });
  },

  cadastrar(req, res) {
    return res.json({ mensagem: 'Cadastrando livro' });
  },

  update(req, res) {
    return res.json({ mensagem: 'Atualizando livro completo' });
  },

  patchStatus(req, res) {
    return res.json({ mensagem: 'Atualizando status do livro' });
  },

  deletar(req, res) {
    return res.json({ mensagem: 'Deletando livro' });
  }
};

module.exports = LivroController;