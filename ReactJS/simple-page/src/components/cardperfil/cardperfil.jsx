import MyPeople from "../../assets/Mulher.jpg"
import "./cardperfil.css"

function CardPerfil(){
return (

     <div className="card-perfil">
            <img className="card-perfil__image" src={MyPeople} alt="Imagem do usuario"/>
        </div>

);
}

export default CardPerfil;