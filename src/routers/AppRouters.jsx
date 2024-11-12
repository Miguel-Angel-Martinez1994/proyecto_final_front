import {Routes,Route,Navigate} from "react-router-dom"
import { useContext } from "react"

import {
        LoginPage,
        HomePage,
        RegisterPage,
        GridLibros,
        CardLibro,
        CategoriaEjemplo1,
        CategoriaEjemplo2
    } from "../publicViews/pages"
import { UserContext } from "../context/UserContext"
import { ProtectedPage } from "../admin/pages/ProtectedPage"


export const AppRouters = () => {
    const {isAuthenticated}=useContext(UserContext)

  return (
    <Routes>
        {/*RUTAS PUBLICAS*/}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>

        <Route path="/inicio" element={<LoginPage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>

        <Route path="/categoria1" element={<CategoriaEjemplo1/>}/>
        <Route path="/categoria2" element={<CategoriaEjemplo2/>}/>

        {/*Si el usuario intenta ir a una ruta que no existe se le devolvera al login*/}
        <Route path="/*" element={<Navigate to={'/inicio'}/>}/>

        {/*RUTAS PROTEGIDAS*/}
        {
            isAuthenticated 
            ?
              <Route path="/admin" element={<ProtectedPage/>}/>
            :
              <Route path="/*" element={<Navigate to={'/inicio'}/>}/>
        }
    </Routes>
  )
}
