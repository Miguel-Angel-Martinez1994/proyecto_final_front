import {Routes,Route,Navigate} from "react-router-dom"
import { useContext } from "react"

import {
        LoginPage,
        RegisterPage
    } from "../publicViews/pages"
import { UserContext } from "../context/UserContext"
import { ProtectedPage } from "../admin/pages/ProtectedPage"
import {CardLibro,GridLibros,HomePage,CreateLibro} from "../ui/components"


export const AppRouters = () => {
    const {isAuthenticated,usuario}=useContext(UserContext)

    console.log({isAuthenticated},usuario,"prueba")

  return (
    <Routes>
        {/*RUTAS PUBLICAS*/}
        <Route path="/" element={<LoginPage/>}/>
        
        <Route path="/inicio" element={<LoginPage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>

        <Route path="/home" element={<HomePage/>}/>
        <Route path="/crearLibro" element={<CreateLibro/>}/>
         
        

        {/*RUTAS PROTEGIDAS*/}
        {

            isAuthenticated 
            ?
            <Route path="/admin" element={<ProtectedPage/>}/> 
              
            :
              /*Si el usuario intenta ir a una ruta que no existe se le devolvera al login*/
              <Route path="/*" element={<Navigate to={'/inicio'}/>}/>
        }
    </Routes>
  )
}
