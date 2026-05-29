import Header from "../../components/header/Header";
import "./CadastroArtista.css";
import Footer from "../../components/footer/Footer"
import { Alerta } from "../../components/alerta/Alerta";
import { useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
  //States e Variavies
  const [valor, setValor] = useState("")
  const [editar, setEditar] = useState(false)
  const [listaArtista, setListaArtista] = useState([
{
  idGenero: 1,
  titulo: "Rita Lee",
 genero: { idGenero: 2, nome: "Rock"},
},

{
  idGenero: 2,
  titulo: "System Of Donw",
 genero: { idGenero: 2, nome: "Metal"},
},

{
  idGenero: 3,
  titulo: "Chico Buarque",
 genero: { idGenero: 2, nome: "MPB"},
}

  ]);


  const [listaGeneros, setListaGeneros] = useState([
  
    { idGenero: 1, nome: "MPB" },
    { idGenero: 2, nome: "Rock" },
    { idGenero: 3, nome: "Metal" },
    { idGenero: 4, nome: "Jazz" },
    
  ])

  const getArtista = () => {
    try {

    } catch (error) {

    }
  }


  const getMusica = () => {
    Alerta({
      title: "cadastro de Artista",
      text: "Listagem de Artista em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }


  const cadastrarArtista = (e) => {
    e.preventDefault()

    Alerta({
      title: "cadastro de Artista",
      text: "Cadastrar Artista em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }

  const editarArtista = () => {
    Alerta({
      title: "cadastro de Artista",
      text: "Editar Artista em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }
  const preEditar = () => {
    Alerta({
      title: "cadastro de Artista",
      text: "Pré Editar Artista em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }

  const excluirArtista = () => {
    Alerta({
      title: "cadastro de Artista",
      text: "Excluir Artista em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }

  const limparFormulario = () => {


    Alerta({
      title: "cadastro de Artista",
      text: "Limpar Formulário em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }




  //Funcoes


  //Ciclo de Vida




  return (
    <>
      <Header />
      <main>

        <Cadastro
          //Define o título que será exibido no formulário
          tituloCadastro="Cadastrar um Artista"
          // esconde o select de genero
          // visibilidade="none"
          // Define o texto que aparece dentro do campo de input
          placeholder="filmes"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:

          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={editar ? editarArtista : cadastrarArtista}
          //Valor atual do campo de texto
          valor={valor}
          //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
          btnEditar={editar}
          cancelarEdicao={limparFormulario}
          listaGeneros={listaArtista}
        />

        <Lista
          tituloLista="Lista de Musica"
          //visibilidade="none"
          //Chama o método para validar:
          lista={listaMusica}
          //Identifica o tipo de lista:
          tipoLista="Musica"
          funcExcluir={excluirArtista}
          funcEditar={preEditar}
        />

      </main>
      <Footer />
    </>
  );
};

export default CadastroArtista;
