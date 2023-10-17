import '../App.css'
import Publicacion from "./Publicacion";


export default function Lista({publicaciones, setPublicaciones}){
  return (
    <div>
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