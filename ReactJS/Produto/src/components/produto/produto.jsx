import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    /* const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })*/
    const [editar, setEditar] = useState(false)
    const [arrProdutos, setArrProdutos] = useState([])

    async function cadastrarProduto(e) {
        e.preventDefault();//nao deixa o formulario ser postado

        // alert("Função Cadastrar Chamada")

        // return false

        if (nome.trim().length == 0 || descricao.trim().length == 0 ||
            isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente!")
            return false;
        }

        const objCadastro = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            imagem: "image.jpg"
        }
        console.log(objCadastro)

        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objCadastro),
                headers: {
                    "Content-Type": "application/json; carset=UTF-8"
                }
            })
            console.log(retornoAPI);
            if (retornoAPI.status == 201) {
                const dadosCadastrados = await retornoAPI.json()
                console.log(dadosCadastrados);
                setArrProdutos([...arrProdutos, dadosCadastrados])
            } else {
                alert("Problema inesperado")
            }

        } catch (error) {
            alert("Não foi possível salvar os dados");
            console.log(error)

        }
    }

    function limparFormulario() {
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)

    }



    useEffect(() => {
        

        getProdutos()
    }, [])

    async function getProdutos() {
            try {
                const retornoAPI = await fetch("http://localhost:3000/produtos")
                const dados = await retornoAPI.json()
                console.log(dados);
                setArrProdutos(dados)

            } catch (error) {
                console.log("erro ao buscar os produtos");
                console.log(error);
            }
        }

    async function deletar(id) {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id})`, {
                method: "delete",
            })
            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {

                const novaLista = arrProdutos.filter((prod) => {
                    return prod.id != id
                })

                setArrProdutos(novaLista)
            } else {
                alert("Algum erro ocorreu ao apagar")
            }


        } catch (error) {
            alert("Erro ao apagar o produto")
            console.log(error);
        }

    }


    function editarProduto(e) {
        e.preventDefault()
        // alert("Função Editar Chamada")
    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {editar && <button type="button" className="btn--cadastro" onClick= {() => {
                    setEditar(false);
                    limparFormulario()
                }} 
                >
                Cancelar</button>
            }{" "}

                <button type="submit" className="btn--cadastro">Adicionar Produto</button>

            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2 className="produtos__titulo">{prod.nome}</h2>
                        <p className="produtos__descricao">Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p className="produtos__descricao">Descrição: {prod.descricao}</p>
                        <p className="produtos__descricao">Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a href="" onClick={() => {
                            e.preventDefault()
                            deletar(prod.id)
                        }}>Apagar</a>



                        <button className="produtos__btn-comprar">Comprar</button>
                        <a href="" onClick={(e) => {
                            e.preventDefault()

                            setEditar(true)
                            setNome(prod.nome),
                                setDescricao(prod.descricao),
                                setPreco(prod.preco),
                                setQuantidade(prod.quantidade)
                        }}>Editar</a>
                    </div>
                ))}
            </section>
        </>
    )
}