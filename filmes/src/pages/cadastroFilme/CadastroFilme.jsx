import Header from "../../components/header/Header";
import "./CadastroFilme.css";
import Footer from "../../components/footer/Footer"
import { Alerta } from "../../components/alerta/Alerta";
import { useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
  //States e Variavies
  const [valor, setValor] = useState("")
  const [editar, setEditar] = useState(false)
  const [listaFilmes, setListaFilmes] = useState([]);


  const [listaGeneros, setListaGeneros] = useState([])

  const getGeneros = async () => {
    try { 
      const retornoAPI = await api.get("/Genero");
      setListaGeneros(retornoAPI.data);
    } catch (error) {
      alert("Problemas ao carregar os dados da API");

    }
  };
  

  const getFilmes = () => {
    Alerta({
      title: "cadastro de Filme",
      text: "Listagem de filme em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }


  const cadastrarFilme = (e) => {
    e.preventDefault()

    Alerta({
      title: "cadastro de Filme",
      text: "Cadastrar filme em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }

  const editarFilme = () => {
    Alerta({
      title: "cadastro de Filme",
      text: "Editar filme em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }
  const preEditar = () => {
    Alerta({
      title: "cadastro de Filme",
      text: "Pré Editar filme em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }

  const excluirFilme = () => {
    Alerta({
      title: "cadastro de Filme",
      text: "Excluir filme em desenvolvimento",
      icon: "sucess",
      confirmButtonText: "Ok"
    })
  }

  const limparFormulario = () => {


    Alerta({
      title: "cadastro de Filme",
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
          tituloCadastro="Cadastrar um Filme"
          // esconde o select de genero
          // visibilidade="none"
          // Define o texto que aparece dentro do campo de input
          placeholder="filmes"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:

          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={editar ? editarFilme : cadastrarFilme}
          //Valor atual do campo de texto
          valor={valor}
          //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
          btnEditar={editar}
          cancelarEdicao={limparFormulario}
          listaGeneros={listaGeneros}
        />

        <Lista
          tituloLista="Lista de Gêneros"
          //visibilidade="none"
          //Chama o método para validar:
          lista={listaFilmes}
          //Identifica o tipo de lista:
          tipoLista="filme"
          funcExcluir={excluirFilme}
          funcEditar={preEditar}
        />

      </main>
      <Footer />
    </>
  );
};

export default CadastroFilme;
