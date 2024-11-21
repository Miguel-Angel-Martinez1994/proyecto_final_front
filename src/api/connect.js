

export const connect =async (url,method="GET",body={}) => {

    try{
        let options={} 
        if(method=="POST" || method=="PUT"){
            options= {
                method,
                body:JSON.stringify(body),
                headers:{
                    "Content-Type":"aplication/json"
                }
            }
        }

        if(method=="GET"||method=="DELETE"){
            options={
                method
            }
        }
        
        const respuesta = await fetch(url,options)
        if(respuesta.ok){
            return respuesta.json()
        }else{
            throw ("ERROR al consumir la API ")
        }
    }catch(error){
        
        throw (error)
    }

}
