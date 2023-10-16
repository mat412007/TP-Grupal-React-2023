import './App.css'
import { Routes, Route} from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import Posts from './Paginas/Publicaciones'

function App(){
  return(
    <>
    <div>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/publicaciones" element={<Posts />} />
      </Routes>
    </div>
    </>
  )
}

export default App


