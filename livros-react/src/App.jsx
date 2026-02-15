import { useEffect, useState } from 'react';
import controleLivros from './controleLivros';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [form, setForm] = useState({
    codigo: '',
    codEditora: '',
    titulo: '',
    resumo: '',
    autores: '',
  });

  const carregar = async () => {
    setCarregando(true);
    const data = await controleLivros.obterTodos();
    setLivros(data);
    setCarregando(false);
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const incluir = async (e) => {
    e.preventDefault();
    const autoresArr = form.autores
      .split(',')
      .map((a) => a.trim())
      .filter(Boolean);
    const ok = await controleLivros.incluir({
      codigo: '',
      codEditora: Number(form.codEditora),
      titulo: form.titulo,
      resumo: form.resumo,
      autores: autoresArr,
    });
    if (ok) {
      setForm({ codigo: '', codEditora: '', titulo: '', resumo: '', autores: '' });
      await carregar();
    } else {
      alert('Falha ao incluir');
    }
  };

  const excluir = async (codigo) => {
    const ok = await controleLivros.excluir(codigo);
    if (ok) {
      await carregar();
    } else {
      alert('Falha ao excluir');
    }
  };

  return (
    <div className="container">
      <h1>Livros - React</h1>

      <section className="card">
        <h2>Incluir livro</h2>
        <form onSubmit={incluir} className="form">
          <label>
            Código da Editora
            <input name="codEditora" value={form.codEditora} onChange={handleChange} required />
          </label>
          <label>
            Título
            <input name="titulo" value={form.titulo} onChange={handleChange} required />
          </label>
          <label>
            Resumo
            <textarea name="resumo" value={form.resumo} onChange={handleChange} required />
          </label>
          <label>
            Autores (separados por vírgula)
            <input name="autores" value={form.autores} onChange={handleChange} required />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </section>

      <section className="card">
        <h2>Lista</h2>
        {carregando ? (
          <p>Carregando...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Resumo</th>
                <th>Autores</th>
                <th>Cod. Editora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro, idx) => (
                <tr key={idx}>
                  <td>{livro.titulo}</td>
                  <td>{livro.resumo}</td>
                  <td>{livro.autores.join(', ')}</td>
                  <td>{livro.codEditora}</td>
                  <td>
                    <button onClick={() => excluir(livro.codigo)}>Excluir</button>
                  </td>
                </tr>
              ))}
              {livros.length === 0 && (
                <tr>
                  <td colSpan="5">Nenhum livro cadastrado</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default App;
