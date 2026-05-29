import "./CadastroMusica.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/Services";
import Swal from "sweetalert2";
import { Alerta } from "../../components/alerta/Alerta";

const CadastroMusica = () => {

    const [valor, setValor] = useState("")
    const [listaMusica, setListaGeneros] = useState([])
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(0)



    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            setListaGeneros(retornoAPI.data)
        } catch (error) {
            Swal.fire({
                title: 'Cadastro de Musica',
                text: `${valor} Problemas ao carregar os dados da API`,
                icon: 'error',
                confirmButtonText: 'Top'
            })
            console.log(error);
        }
    }

    useEffect(() => {
        getGeneros()
    }, [])





    const cadastrarMusica = async (e) => {
        e.preventDefault();

        if (valor.trim().length == 0) {
            Alerta({
                title: 'Cadastro de Musica',
                text: `${valor} Preencher o campo musica`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })


            // Swal.fire({
            //     title: 'Cadastro de Gênero',
            //     text: `${valor} Preencher o campo genero`,
            //     icon: 'error',
            //     confirmButtonText: 'Cool'
            // })
            // alert("Preencher o campo genero")
            return false
        }
        const objCadastros = {
            nome: valor
        }
        try {

            const retornoAPI = await api.post("/Genero", objCadastros)
            Alerta({
                title: "Cadastro de Musica",
                text: `${valor} Cadastrado com sucesso`,
                icon: 'sucess',
                confirmButtonText: "Top!"
            })

            getGeneros()
            limparFormulario()
        } catch (error) {
            Alerta({
                title: 'Cadastro de Musica',
                text: `${valor} Erro ao cadastrar na API`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.log(error);
        }
    }

    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setId(0)
    }



    const excluirMusica = async (item) => {


        const result = await Alerta({
            title: "Cadastro de Musica",
            text: `Quer apagar este genero ${item.nome}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Apagar",
            cancelButtonText: "Jamais"
        })


        if (!result.isConfirmed) {

            return false;
        }


        try {

            const retornoAPI = await api.delete(`/Genero/${item.id}`)
            if (retornoAPI.status == 200 || retornoAPI.status == 204) {

                 Alerta({
                    title: 'Cadastro de Musica',
                    text: `${valor} Apagado com sucesso`,
                    icon: 'sucesss',
                    confirmButtonText: 'Top!'
                })
                getGeneros()
            } else {

                Alerta({
                    title: 'Cadastro de Musica',
                    text: `${valor} Problemas ao apagar a musica`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }


        } catch (error) {

            Alerta({
                title: 'Cadastro de Musia',
                text: `${valor} Erro ao cadastrar na API`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.log(error);
        }

    }

    
    const preEditar = (item) => {
        setEditar(true)
        setValor(item.nome)
        setId(item.id)
    }

    const editarMusica = async (e) => {
        e.preventDefault();

        if (valor.trim().length == 0) {

            Alerta({
                title: 'Cadastro de Musica',
                text: `${valor} Preencher o genero`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return false;
        }
        const objEditar = {
            nome: valor,
        };

        try {
            const retornoAPI = await api.put(`/Genero/${id}`, objEditar)
            limparFormulario()
            getGeneros()

            Alerta({
                title: 'Cadastro de Musica',
                text: `${valor} Musica atualizada`,
                icon: 'sucess',
                confirmButtonText: 'Ok'
            })
        } catch (error) {


            Alerta({
                title: 'Cadastro de Gênero',
                text: `${valor} Erro ao atualizar os dados na API`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.log(error);
        }



        //alert("Funcao Editar genero em desenvolvimento")
    }

    return (
        <>
            <Header />
            <main>
                {/*Form de cadastro de Generos*/}
                <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Musica"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="musica"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={editar ? editarMusica : cadastrarMusica}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                />

                <Lista
                    tituloLista="Lista de Musica"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaMusica}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir={excluirMusica}
                    funcEditar={preEditar}
                />

            </main>
            <Footer />
        </>

    )
};

export default CadastroMusica;