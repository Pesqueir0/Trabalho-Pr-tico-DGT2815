const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.json({ ok: true, mensagem: 'Livro incluído com sucesso' });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultado = await excluir(id);
    const sucesso = resultado.deletedCount > 0;
    res.json({ ok: sucesso });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
