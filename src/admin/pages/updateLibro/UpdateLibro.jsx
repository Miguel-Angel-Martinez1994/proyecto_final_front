import { useNavigate, useParams } from "react-router-dom"
import "./updateLibro.css"
import { useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import { serializeForm } from "../../../helpers/serializeForm"

export const UpdateLibro = () => {

  const {libro_id}=useParams
  
  const navigate = useNavigate()

  const [form,setForm]=useState({
    libro_id:"",
    titulo:"",
    idioma:"",
    titulo_original:"",
    autor:"",
    sinopsis:"",
    categoria_id:"",
    usuario_id:""
  })

  const urlBuscarxId= `${import.meta.env.VITE_URL_BASE}/api/v1/getLibro/${libro_id}`
  
  const {libros,isLoading,errors,getAPI}=useFetch(urlBuscarxId)

  const {ok,respuesta}=libros

  const handlersubmit=async (ev)=>{
    ev.preventDefault()
    const formData=serializeForm(ev.target)
    try{
      const urlEditar=`${import.meta.env.VITE_URL_BASE}/api/v1/editLibro/${id}`
      
      const resp =await getAPI(urlEditar,"PUT",formData)

      if(resp.ok){
        navigate(`/admin`)
        console.log("Libro editado")
      }else{
        console.log("error al editar")
      }
    }catch(error){
      console.log('Error en el update')
    }
  }

  return (
    <>
        <h1>EDITAR LIBRO</h1>

        <main>
          <form className="book-form" onSubmit={handlersubmit}>
            <label htmlFor="titulo">Titulo</label> 
            <input type="text" id="titulo" name="titulo" placeholder="Titulo" required/>

            <label htmlFor="idioma">Idioma</label>
            <input type="text" id="idioma" name="idioma" placeholder="Idioma" required/>

            <label htmlFor="titulo_original">Titulo Original</label>
            <input type="text" id="titulo_original" name="titulo_original" placeholder="Titulo original" required/>

            <label htmlFor="autor">Autor</label>
            <input type="text" id="autor" name="autor" placeholder="Autor" required/>

            <label htmlFor="sinopsis">Sinopsis</label>
            <textarea rows="4" id="sinopsis" name="sinopsis" placeholder="Sinopsis" required/>

            <label htmlFor="genero">Genero</label>
            <select id="genero" name="genero" required>
                <option value="">Seleccione un genero</option>
                <option value="accion">Accion</option>
                <option value="romance">Romance</option>
                <option value="poesia">Poesia</option>
                <option value="educativo">Educativo</option>
                <option value="aventura">Aventura</option>
            </select>

            <button type="submit">Editar</button>
          </form>
      </main>
    </>
  )
}
