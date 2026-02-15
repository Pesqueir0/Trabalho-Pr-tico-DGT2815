const baseURL = 'http://localhost:3030/livros';

const obterTodos = async () => {
  const resp = await fetch(baseURL);
  const data = await resp.json();
  return data.map((l) => ({
    codigo: l._id,
    codEditora: l.codEditora,
    titulo: l.titulo,
    resumo: l.resumo,
    autores: l.autores,
  }));
};

const incluir = async (livro) => {
  const mongoLivro = { ...livro, autores: livro.autores };
  const resp = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mongoLivro),
  });
  return resp.ok;
};

const excluir = async (codigo) => {
  const resp = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return resp.ok;
};

export default { obterTodos, incluir, excluir };
