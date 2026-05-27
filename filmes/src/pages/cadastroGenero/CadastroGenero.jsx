import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../Services/Services"

const CadastroGenero = () => {

    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])
    



    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            setListaGeneros(retornoAPI.data)
        } catch (error) {
            alert("Problemas ao carregar os dados da API")
            console.log(error);
        }
    }

    useEffect(() => {
        getGeneros()
    }, [])

    



    const cadastrarGenero = async (e) => {
        e.preventDefault();

       if(valor.trim().length == 0){
         alert("Preencher o campo genero")
         return false
       }
       const objCadastros = {
        nome: valor
       }
       try {
        
        const retornoAPI = await api.post("/Genero", objCadastros)
        alert("Cadastrado com sucesso")
        getGeneros()
        limparFormulario()
       } catch (error) {
        alert("Erro ao cadastrar na API")
        console.log(error);
       }
    }

    const limparFormulario = () => {
        setValor("")
    }



    const excluirGenero = (item) => {

         try {
        if (!confirm(`Quer apagar este genero ${item.nome}?`)) {
            
        }
        const retornoAPI = await api.delete(`/Genero/ ${item.id}`)
        alert("Apagado com sucesso")
        getGeneros()
      
       } catch (error) {
        alert("Erro ao cadastrar na API")
        console.log(error);
       }
        
    }

    const editarGenero = () => {
        alert("Funcao Editar genero em desenvolvimento")
    }

    return (
        <>
            <Header />
            <main>
                {/*Form de cadastro de Generos*/}
                <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={cadastrarGenero}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir={excluirGenero}
                    funcEditar={editarGenero}
                />

            </main>
            <Footer />
        </>

    )
}

export default CadastroGenero