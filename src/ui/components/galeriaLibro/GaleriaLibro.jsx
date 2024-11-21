import { useParams } from "react-router-dom"
import { useFetch } from "../../../hooks/useFetch"
import "./galeriaLibro.css"
import { CardLibro } from "../cardLibro/CardLibro"

export const GaleriaLibro = () => {

  const {p}=useParams()
  const page=!p ? 0 : p 
  const url=`${import.meta.env.VITE_URL_BASE}/api/v1/allLibros/0`

  const {libros,isLoading,errors}=useFetch(url)
  
  const {ok,total_pages,respuesta}=libros

  return (
    <>
        
             
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
                              <CardLibro key={libro.libro_id} {...libro}/>
                            )
                          )
                      )
                }
                
              
            
    </>
  )
}
