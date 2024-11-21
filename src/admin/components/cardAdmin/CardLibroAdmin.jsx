
import "./cardLibroAdmin.css"
import { useFetch } from "../../../hooks/useFetch"
import { Link } from "react-router-dom"

export const CardLibroAdmin = ({libro_id,titulo,autor,sinopsis,genero}) => {

  
  return (
    <>
        <div className='card'>
            <h2>{titulo}</h2>
            <p>{autor}</p>
            <p>{sinopsis}</p>
            <p>{genero}</p>
            
           
              <Link to={`/updatelibro/${libro_id}`} className="">Editar</Link>
              <Link to={`/deletelibro/${libro_id}`} className="">Eliminar</Link>
            
        </div>
    </>
  )
}
