import { createContext, useState } from 'react'

//Creamos el contexto llamado userContext, exportando la dependencia de react (se hace el import solo al empezar escribir el createContext) y lo exportamos para que mande el contexto creado
export const UserContext=createContext();

export const UserProvider = ({children}) => {

    //seteamos el estado de cada usuario que se quiera logear en nuestra app
    const [usuario, setUsuario]=useState({})

    //seteamos si el usuario se ha autentificado, hasta que no lo haga, su autentificacion inicial sera falsa 
    const [isAuthenticated, setIsAuthenticated]=useState(false)

    //cuando se loguee el usuario, cambiamos el estado de su autentificacion como verdadero
    const login =()=>{
        

      setIsAuthenticated(true)
    }

    //cuando nos salgamos de la aplicacion, volvemos a cambiar el estado de la autentificacion a falso y vaciamos el provider de los datos que daba
    const logout=()=>{
        setIsAuthenticated(false)
        setUsuario({})
    }

  return (
    <UserContext.Provider value={{
        mensaje:'ok',
        usuario,
        setUsuario,
        isAuthenticated,
        login,
        logout
    }}>
        {children}
    </UserContext.Provider>
  )
}


