import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useState } from "react"


const Perfil = () => {

  const { usuario, setUsuario } = useContext(UsuarioContext)
  const [novousuario, setNovoUsuario] = useState("")

  const login = (novousuario) => {
     setUsuario(novousuario);
     localStorage.setItem("usuario", novousuario);
            setNovoUsuario("")

  }



  return (
    <>
      <h2>Página de perfil do usuário</h2>
      <span>Usuario: {usuario}</span>
      <p>
        <input 
        type="text"  
        placeholder="Novo usuário"
        value={novousuario}
        onChange={(e) => {
          setNovoUsuario(e.target.value)
        }}

        />
       
        <button 
        onClick={
          () => {
            login()
          
          }}
        >
          Entrar
        </button>
      </p>
    </>
  )
}

export default Perfil