import React, { useEffect, useState } from 'react'
import Publicacion from '../components/Publicacion'
import '../App.css'

const Inicio = () => {

    const [contenido, setContenido] = useState('')
    const [publicaciones, setPublicaciones] = useState([])
    const [nombre, setNombre] = useState('')
    const [titulo, setTitulo] = useState('')


    useEffect(() => {
        const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || []
        setPublicaciones(publicacionesGuardadas)
    }, [])

    function nombreCambio(e){
        setNombre(e.target.value)
    }

    function tituloCambio(e){
        setTitulo(e.target.value)
    }


    function handleClick(e) {
        e.preventDefault()

        const nuevaPublicacion = {
            nombreUsuario: nombre,
            texto: contenido,
            header: titulo
        }

        // Spread operator, me sirve para indicar que voy a darle a un array
        // como valor, lo que ya tenia mas lo nuevo que le indico
        setPublicaciones([...publicaciones, nuevaPublicacion])
        localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]))
        setNombre('')
        setTitulo('')
        setContenido('')
    }


  return (
    <div>
        <div id='post'>
            <h1 style={{color: 'black'}}><u>Blog</u></h1>
            <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange={nombreCambio} /><br /><br />
            <input type="text" placeholder='Ingrese el titulo' value={titulo} onChange={tituloCambio} /><br /><br />
            <textarea
            value={contenido}
            className='content'
            onChange={(e) => {setContenido(e.target.value)}}
            /> 
            <br />
            <input type='button' onClick={handleClick} value="Publicar"/>
        </div>
        <div id='publicaciones'>
            {
                publicaciones.map((publicacion, index) => (
                    // Key es un identificador unico para cada uno de los elementos
                    // HTML que genera mi map, y sirve para el renderizado
                    // O bien puedo usar un valor unico del elemento o instanciar una variable
                    // index que sera diferente por cada uno de los ciclos del map
                    <div key={index}>
                        <Publicacion nombreUsuario={publicacion.nombreUsuario} contenido={publicacion.texto} titulo={publicacion.header} publicaciones={publicaciones} setPublicaciones={setPublicaciones} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Inicio