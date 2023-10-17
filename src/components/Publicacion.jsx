import { useState } from 'react'
import Markdown  from 'react-markdown';
import '../App.css'

const Publicacion = ({nombreUsuario, contenido, titulo, publicaciones, setPublicaciones}) => {

    const [comentario, setComentario] = useState('')
    const [comentarios, setComentarios] = useState([])

    function handleComentar() {
        setComentarios([...comentarios, comentario])
        setComentario('')
    }

    function deleteTarea(e) {
        let id = +e.target.parentElement.id; /*El + hace exactamente lo mismo que parseInt()*/
        let nuevasPublicaciones = publicaciones.filter((publicacion, indice) => {
          if (indice !== id) {
            return publicacion;
          }
          else{
            localStorage.removeItem(id);
          }
        });
        setPublicaciones(nuevasPublicaciones);
    }

    return (
    <div id='main-publicacion'>
        <header>
            <p className='nombre-usuario'>{nombreUsuario}</p>
        </header>
        <main>
            <section>
                <p className='titulo'>{titulo}</p>
                <p className='contenido'><Markdown>{contenido}</Markdown></p>
            </section>
            <section className='comentarios'>
                <textarea 
                className='comentario'
                onChange={(e) => {setComentario(e.target.value)}}
                /> <br />
                <input onClick={handleComentar} type='button' value="Comentar"/>
                <h4>Comentarios</h4>
                {
                    comentarios.map((comentario, idx) => (
                        <p key={idx}>{comentario}</p>
                    ))
                }
            </section>
            <input type='button' value="Eliminar" onClick={deleteTarea}/>
        </main>
    </div>
  )
}

export default Publicacion