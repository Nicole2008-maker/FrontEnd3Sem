import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Perfil = () => {
  //   state global (UsuarioContext)
  const { usuario, setUsuario } = useContext(UsuarioContext);
  // state local
  //******************** novoUsuario = email **************
  const [email, setEmail] = useState("");

  const login = () => {

    setUsuario(email);
    // guarda o usuário no localStorage no formato JSON (string)
    localStorage.setItem("usuario", JSON.stringify(email)); // pegar o dado e colocar no storage
    setEmail("");
  };

  return (
    <>
      <h2>Página de perfil do usuário</h2>
      <span>Usuário: {usuario}</span>
      <p>
        <input
          type="text"
          placeholder="Novo usuário"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          onClick={() => {
           login()
          }}
        >
          Entrar
        </button>
      </p>
    </>
  );
};

export default Perfil;
