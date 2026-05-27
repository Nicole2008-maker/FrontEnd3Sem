
import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import FormularioState from './components/formulariostate/formulariostate'
import CadFruta from './components/cadfruta/cadfruta'

function App() {
  const [titulo, setTitulo] = useState("Google")

function mudarTexto(){
setTitulo("Microsoft")

}
function mudarTexto2(){
setTitulo("Eduardo")

}

 return(
   <>
  {/* // <h1>Minha página de {titulo}</h1>
  // <button onClick={mudarTexto}>Mudar texto</button>
  // <br />
  // <button onClick={mudarTexto2}>Adenicon</button>

  // <Contador />
  // <br /> */}
  {/* <FormularioState /> */}
  <CadFruta />
  </>
 );
  
}

export default App
