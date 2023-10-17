import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Publicaciones from './pages/Publicaciones'
import './App.css'

function App() {


  return (
    <Router>
      <nav style={{height: '50px',backgroundColor: 'black', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Link to="/">Inicio</Link>
            <Link to="/publicaciones">Publicaciones</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/publicaciones" element={<Publicaciones/>}/>
      </Routes>

    </Router>
  )
}

export default App
