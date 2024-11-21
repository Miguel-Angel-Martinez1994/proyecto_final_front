import { useEffect, useState } from "react"
import { connect } from "../api/Connect"

export const useFetch = (url,method="GET",body={}) => {

    const [libros, setLibros] = useState([])
    const [isLoading, setIsLoading] = useState(true)//comprobacion de si esta cargado la llamada a API
    const [errors, setErrors] = useState(null)

    const getAPI=async()=>{
        try{
            const resp = await connect(url,method,body)
            //console.log(resp," EN getAPI")
            setLibros(resp)
            setIsLoading(false)
            setErrors(null)
        }catch(error){
            console.log(error)
            setErrors(error)
            setIsLoading(false)
        }    
    }

    useEffect(()=>{
        getAPI()
    },[])

  return {
    libros,
    isLoading,
    errors,
    getAPI
  }
}
