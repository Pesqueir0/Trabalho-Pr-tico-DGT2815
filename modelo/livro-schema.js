const banco = require('./conexao');

const LivroSchema = new banco.Schema(
  {
    codEditora: { type: Number, required: true },
    titulo: { type: String, required: true },
    resumo: { type: String, required: true },
    autores: { type: [String], required: true },
  },
  { versionKey: false }
);

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;
