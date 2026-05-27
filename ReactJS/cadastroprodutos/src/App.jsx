import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroFrutasPage from './pages/cadastrofruta/cadastrofrutaPage'
import CadastroProdutoPage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import Header from './components/header/header'

export default function App(){
  return(
<BrowserRouter>
<Header />
<Routes>
  <Route element={ <HomePage />} path='/' />
  <Route element={<QuemSomosPage />} path='/quemsomos' />
  <Route element={<CadastroFrutasPage />} path='/frutas' />
  <Route element={   <CadastroProdutoPage />} path='/produtos' />
</Routes>
</BrowserRouter> 
  )
}