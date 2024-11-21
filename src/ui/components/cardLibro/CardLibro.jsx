import { Link } from "react-router-dom"
import "./cardLibro.css"

export const CardLibro = ({libro_id,titulo,autor,sinopsis,genero}) => {

  return (
    <>
        <div className='card'>
            <h2>{titulo}</h2>
            <p>{autor}</p>
            <p>{sinopsis}</p>
            <p>{genero}</p>
            <Link to={`/verlibro/${libro_id}`} className="">Ver Mas</Link>
        </div>
    </>
  )
}
