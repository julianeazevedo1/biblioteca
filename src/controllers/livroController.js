const supabase = require('../config/supabase');

const LivroController = {

  async listar(req, res) {
    const { data, error } = await supabase
      .from('livros')
      .select('*')
      .order('titulo', { ascending: true });

    if (error) return res.status(400).json(error);

    return res.json(data);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('livros')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    return res.json(data);
  },

  async cadastrar(req, res) {
    const { titulo, autor, disponivel } = req.body;

    if (!titulo || !autor) {
      return res.status(400).json({ erro: 'Título e autor são obrigatórios' });
    }

    const { data, error } = await supabase
      .from('livros')
      .insert([{ titulo, autor, disponivel }])
      .select();

    if (error) return res.status(400).json(error);

    return res.status(201).json(data);
  },

  async update(req, res) {
    const { id } = req.params;
    const { titulo, autor, disponivel } = req.body;

    const { data, error } = await supabase
      .from('livros')
      .update({ titulo, autor, disponivel })
      .eq('id', id)
      .select();

    if (error) return res.status(400).json(error);

    if (data.length === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    return res.json(data);
  },

  async patchStatus(req, res) {
    const { id } = req.params;
    const { disponivel } = req.body;

    const { data, error } = await supabase
      .from('livros')
      .update({ disponivel })
      .eq('id', id)
      .select();

    if (error) return res.status(400).json(error);

    if (data.length === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    return res.json(data);
  },

  async deletar(req, res) {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('livros')
      .delete()
      .eq('id', id)
      .select();

    if (error) return res.status(400).json(error);

    if (data.length === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    return res.json({ mensagem: 'Livro deletado com sucesso' });
  }
};

module.exports = LivroController;