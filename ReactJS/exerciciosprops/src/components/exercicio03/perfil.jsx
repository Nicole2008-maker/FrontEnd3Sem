export default function Perfil({nome, idade, porofissao}){
return(
    <div className="card-perfil">
<p>
    <strong>Nome:  </strong> {nome}
</p>
<p>
    <strong>Idade: </strong> {idade}
</p>
<p>
    <strong>Profissão: </strong> {profissao}
</p>
    </div>
)
}

