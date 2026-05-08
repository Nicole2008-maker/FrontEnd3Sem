import "./produto.css"

function Produto ({nome, preco, descricao}){
 return (
<p className="card-produto">
    <span  className="card-produto_line">
 <strong>Nome do Produto: </strong> {nome} 
    </span>
   <span className="card-produto_line">
 <strong>Preço:</strong>  R$ {preco.toFixed(2)} 
   </span>
   <span className="card-produto_line">
<strong>Descrição do Produto: </strong> {descricao}
   </span>
</p>

 );
}

export default Produto;