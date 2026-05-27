import { useState } from "react"

function Contador() {

// Variaveis e states
// funçõe
 const [contador, setContador] = useState(0)

 function incrementar() {
    if(contador < 10){
    setContador(contador + 1)
    
 } else {
    setContador(0)
 }
}
    
 function decrementar() {
    if(contador > 0){
    setContador(contador - 1)
 } else{
    setContador(0)
 }
}

    return(
        <div className="contador">
        <h1 className="contador__title">Contador {contador}</h1>

        <button onClick={incrementar}>Contar (++)</button>
        <button onClick={decrementar}>Contar (--)</button>

        </div>
    )
}

export default Contador