import React, { useEffect, useState } from 'react'
import Publicacion from '../components/Publicacion'
import '../App.css'
import Lista from '../components/Lista'

const Inicio = ({setPublicaciones, publicaciones}) => {

    const [contenido, setContenido] = useState('')
    const [nombre, setNombre] = useState('')
    const [titulo, setTitulo] = useState('')


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
        {/* <div id='publicaciones'>
            <Lista publicaciones={publicaciones} setPublicaciones={setPublicaciones} />
        </div> */}
    </div>
  )
}

export default Inicio