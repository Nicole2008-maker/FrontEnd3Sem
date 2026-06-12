import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UsuarioContext } from '../../context/UsuarioContext';

const Header = () => {
    const { usuario } = useContext(UsuarioContext)

    console.log();

    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{" | "}
                <Link to={"/perfil"}>Perfil</Link>{" | "}
                <Link to={"/mypage"}>My Blog</Link>{" | "}
                <Link to={"/cdProduto"}>Cadastrar Produto</Link>{" | "}
                <span>( {usuario})</span>

<button
onClick={() => {
   setUsuario(null)
}}
>Sair</button>
            </nav>
            
        </header>
    )
}

export default Header