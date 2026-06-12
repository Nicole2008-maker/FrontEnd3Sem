import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./CadastroFilme.css";
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/alerta/Alerta";
import { useEffect, useState } from "react";
import Lista from "../../components/lista/Lista";
import api from "../../services/Services";

const CadastroFilme = () => {
  // States e Variáveis
  const [valor, setValor] = useState("");
  const [editar, setEditar] = useState(false);
  const [listaFilmes, setListaFilmes] = useState([]);
  const [valorGenero, setValorGenero] = useState("");
  const [imagem, setImagem] = useState(null);
  const [id, setId] = useState(0);

  const [listaGeneros, setListaGeneros] = useState([]);

  // Get
  // Busca os gêneros para colocar no select do formulário
  // Get
  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero"); // chama a api
      setListaGeneros(retornoAPI.data); // preencher o array listaGeneros
    } catch (error) {
      alert("Problemas ao carregar os dados da API");
      Alerta({
        title: "Cadastro de Gênero",
        text: "Problemas ao carregar os dados da API",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  const getFilmes = async () => {
    try {
      const retornoAPI = await api.get("/Filme");
      console.log(retornoAPI.data);
      setListaFilmes(retornoAPI.data);
    } catch (error) {
      console.log(error);

      Alerta({
        title: "Cadastro de Filme",
        text: "Erro ao listar os filmes",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  // Post
  const cadastrarFilme = async (e) => {
    e.preventDefault();
    console.log(valorGenero.trim().length);
    if (valor.trim().length == 0 || valorGenero.trim().length == 0) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Preencher os campos corretamente",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const formData = new FormData();
    formData.append("nome", valor);
    formData.append("idGenero", valorGenero);
    formData.append("imagem", imagem);

    try {
      const retornoAPI = await api.post("/Filme", formData);
      console.log(retornoAPI.data);

      Alerta({
        title: "Cadastro de Filme",
        text: `${valor} foi Cadastrado`,
        icon: "success",
        confirmButtonText: "Ok",
      });
      getFilmes();
      limparFormulario();
    } catch (error) {
      console.log(error);

      Alerta({
        title: "Cadastro de Filme",
        text: "Erro ao Cadastrar",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  // Put
  const preEditar = (item) => {
    // console.log(item);

    setEditar(true);
    setValor(item.titulo);
    setId(item.idFilme);
    setImagem(item.imagem);
  };

  const editarFilme = async (e) => {
    e.preventDefaut();
    
    alert("Vamos cadastrar");
    return false;

    if (valor.trim().length == 0) {
      alert("Preencher o filme");
      return false;
    }

    const objEditar = new FormData();
    objEditar.append("nome", valor);
    objEditar.append("idGenero", valorGenero);
    objEditar.append("imagem", imagem);

    // cadastrar na api com o put
    try {
      const retornoAPI = await api.put(`/Filme/${id}`, objEditar);
      limparFormulario();
      getGeneros();
      // alert("Gênero atualizado");
      Alerta({
        title: "Cadastro de Gênero",
        text: "Gênero atualizado",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      // alert("Erro ao atualiar os dados na API");
      Alerta({
        title: "Cadastro de Gênero",
        text: "Erro ao atualiar os dados na API",
        icon: "error",
        confirmButtonText: "Ok",
      });

      console.log(error);
    }
  };

  // Delete
  const excluirFilme = async (item) => {
    const result = await Alerta({
      title: "Cadastro de Filme",
      text: `Quer apagar o filme ${item.titulo}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Apagar",
      cancelButtonText: "Jamais",
    });

    if (!result.isConfirmed) {
      //se não quer apagar para por aqui
      return false;
    }

    console.log(item);
    try {
      const retornoAPI = await api.delete(`/Filme/${item.idFilme}`);
      console.log(retornoAPI);
      getFilmes();
      Alerta({
        title: "Cadastro de Filme",
        text: `O filme ${item.titulo} foi excluído`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.log(error);

      Alerta({
        title: "Cadastro de Filme",
        text: `Erro ao apagar o filme na API`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  // Funções auxiliares

  const limparFormulario = () => {
    setEditar(false);
    setImagem(null);
    setValor("");
    setValorGenero("");
  };

  // Ciclo de Vida do componente
  useEffect(() => {
    getGeneros();
    getFilmes();
  }, []);
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
          placeholder="filme"
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
          setValorGenero={setValorGenero}
          setImagem={setImagem}
        />

        {/* Lista de Gêneros */}
        <Lista
          tituloLista="Lista de Filmes"
          // visibilidade="none"
          //Chama o método para validar:
          lista={listaFilmes}
          //Identifica o tipo de lista:
          tipoLista="filme"
          funcExcluir={excluirFilme}
          funcEditar={preEditar}
        />
      </main>
      <p>Filme - {valor}</p>
      <p>gênero - {valorGenero}</p>
      <p>imagem - {imagem?.name}</p>

      <Footer />
    </>
  );
};

export default CadastroFilme;
