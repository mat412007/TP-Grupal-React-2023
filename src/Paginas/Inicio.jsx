import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown  from 'react-markdown';
import { useEffect } from 'react';

function Inicio(){

  const[publicacion, setPublicacion] = useState('')
  const[publicaciones, setPublicaciones] = useState([])
  const[nombre, setNombre] = useState('')
  const[titulo, setTitulo] = useState('')
  const[comentario, setComentario] = useState('')
  const[comentarios, setComentarios] = useState([])

  useEffect(() => {
    let posteos = JSON.parse(localStorage.getItem('posts'));
    if (posteos) setPublicaciones(posteos);   
  }, [])  

  function handleComentar() {
    setComentarios([...comentarios, comentario])
    setComentario('')
  }

  function nombreCambio(e){
    setNombre(e.target.value)
  }

  function tituloCambio(e){
    setTitulo(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    let nuevosPosts = [...publicaciones, {titulo,nombre,publicacion}];
    setPublicaciones(nuevosPosts)
    localStorage.setItem('posts', JSON.stringify(nuevosPosts))
    setPublicacion('')
    setNombre('')
    setTitulo('')
  }

  function handleChange(e){
    setPublicacion(e.target.value)
  }

  function deleteTarea(e) {
    let id = +e.target.parentElement.id; /*El + hace exactamente lo mismo que parseInt()*/
    console.log(id);
    console.log(publicaciones);
    let nuevasPublicaciones = publicaciones.filter((publicacion, indice) => {
      console.log(indice,id)
      if (indice !== id) {
        return publicacion;
      }else{
        return null;
      }
    });
    console.log(nuevasPublicaciones);
    setPublicaciones(nuevasPublicaciones);
  }

  const estiloPublicacion = {
    border: '2px solid black',
    sizeAdjust: 'auto',
    maxWidth: '400px'
  }

  function Lista(){
    return(
        <>
        <ul style={{listStyle: 'none'}}>  
        {
        publicaciones.map((p,idx) => 
        <li id={idx} key={idx}>
            <h3>{p.titulo}</h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={estiloPublicacion}><Markdown>{p.publicacion}</Markdown></div>
            <p style={{marginLeft: '10px'}}>Autor: {p.nombre}</p>
            </div>
            <input type="button" value="Eliminar" onClick={deleteTarea} style={{marginTop: '10px'}} /> 
            <br /><br />
            <div>
                <textarea 
                id='comentario'
                value={comentario}
                onChange={(e) => {setComentario(e.target.value)}}/> 
                <br />
                <input onClick={handleComentar} type='button' value="Comentar"/>
                <h4>Comentarios</h4>
                {
                    comentarios.map((comentario) => (
                        <p>{comentario}</p>
                    ))
                }
            </div>
        </li>)
        } 
        </ul>
        </>
    )
}

  return(
    <>
    <header style={{height: '50px',backgroundColor: 'black', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Link to="/">Inicio</Link>
        <Link to="/publicaciones">Posts</Link>
    </header>
      <h1 style={{color: 'black'}}><u>Blog</u></h1>
      <form  onSubmit={handleSubmit}>
        <input type="text" id="autor" placeholder='Ingrese su nombre' value={nombre} onChange={nombreCambio} /><br /><br />
        <input type="text" id="titulo" placeholder='Ingrese el titulo' value={titulo} onChange={tituloCambio} /><br /><br />
        <label htmlFor='publicacion'>Inserte su publicación</label><br />
        <textarea id="publicacion" cols="30" rows="7" value={publicacion} onChange={handleChange}></textarea><br />
        <input type="submit" value="Publicar"/>
      </form>
      <Lista />
    </>
  )
}

export default Inicio


