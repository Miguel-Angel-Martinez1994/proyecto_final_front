
import "./protectedPage.css"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { CardLibroAdmin } from "../components/cardAdmin/CardLibroAdmin"


export const ProtectedPage = () => {

  const {p}=useParams()
  const page =!p ? 0 : p
  const url=`${import.meta.env.VITE_URL_BASE}/api/v1/allLibros/0`

  const {libros,isLoading,errors}=useFetch(url)

  const {ok,total_pages,respuesta}=libros
  

  return (
    <>
     
    
    <div className="gallery">
      {
        errors
          ?
            <p>{errors}</p>
          :
            (
              isLoading
                ?
                  <h3>CARGANDO</h3>
                :
                  respuesta.map((libro)=>(
                    <CardLibroAdmin key={libro.libro_id} {...libro}/>
                  ))
            )
      }
    </div>
    </>
  )
}
