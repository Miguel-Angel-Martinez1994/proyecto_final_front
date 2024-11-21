import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import "./verLibro.css"

export const VerLibro = () => {

    const [libro, setLibro] = useState([])

    const {id}=useParams()
    

    const url = `${import.meta.env.VITE_URL_BASE}/api/v1/getLibro/${id}`
    
    const {libros,isLoading,errors}=useFetch(url)
   
   

    const onPrepareData=()=>{
        if(!isLoading){
            
            const {ok,respuesta}=libros
            
    
            const libro=respuesta[0]
            
            setLibro(libro)
        }  
    }

    useEffect(()=>{
        onPrepareData()
    },[isLoading])

  return (
    <>
    
        <h1>ver libro</h1>
        
        <div className='card'>
              
            <h3>{libro.titulo}</h3>
            <p>{libro.idioma}</p>
            <p>{libro.titulo_original}</p>
            <p>{libro.autor}</p>
            <p>{libro.sinopsis}</p>
            <p>{libro.categoria_id}</p>
           
                
            
        </div>
    </>

  )
}
