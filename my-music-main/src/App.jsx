import "./App.css";

function App() {
  // Variáveis e States

  // Funções e ciclo de vida

  // Componente jsx
  return (
    <div className="container">
      <div className="card">
        <h1>MyMusic</h1>
        <p className="subtitle">Cadastre suas músicas favoritas</p>

        {/* Formulário de cadastro de músicas */}
        <div className="formulario">
          <input type="text" placeholder="Nome da música" />

          <input type="text" placeholder="Artista" />

          <button>Cadastrar</button>
        </div>

        <div className="lista-musicas">
          <h2>Minhas músicas</h2>

          {/* LISTAR COM MAP */}

          <div className="musica-card">
            <div>
              <h3>Blinding Lights</h3>
              <p>The Weeknd</p>
            </div>
            
            <button className="btn-delete">🗑</button>
          </div>

          <div className="musica-card">
            <div>
              <h3>Heat Waves</h3>
              <p>Glass Animals</p>
            </div>

            <button className="btn-delete">🗑</button>
          </div>

          <div className="musica-card">
            <div>
              <h3>Música</h3>
              <p>Artista</p>
            </div>

            <button className="btn-delete">🗑</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
