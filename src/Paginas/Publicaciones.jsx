import '../App.css'
import {Link} from 'react-router-dom';

export default function Posts(){
    return (
      <>
      <header style={{height: '50px',backgroundColor: 'black', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Link to="/">Inicio</Link>
        <Link to="/publicaciones">Posts</Link>
    </header>
      <h1>Publicaciones</h1>
      </>
    )
  }