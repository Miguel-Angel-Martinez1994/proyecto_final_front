import {Routes,Route,Navigate} from "react-router-dom"
import { useContext } from "react"
import {
        LoginPage,
        RegisterPage
    } from "../publicViews/pages"
import { UserContext } from "../context/UserContext"
import { ProtectedPage} from "../admin/pages/ProtectedPage"
import {HomePage,CreateLibro, VerLibro} from "../ui/components"
import { UpdateLibro } from "../admin/pages/updateLibro/UpdateLibro"
import { DeleteLibro } from "../admin/pages"


export const AppRouters = () => {
    const {isAuthenticated}=useContext(UserContext)

  return (
    <Routes>
        {/*RUTAS PUBLICAS*/}
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/inicio" element={<LoginPage/>}/>
        <Route path="/registro" element={<RegisterPage/>}/>

        <Route path="/home" element={<HomePage/>}/>
        
        <Route path="/verlibro/:id" element={<VerLibro/>}/>

        {/*RUTAS PROTEGIDAS*/}
        {

            isAuthenticated 
            ?
            <>
            <Route path="/admin" element={<ProtectedPage/>}/> 
            <Route path="/updatelibro/:id" element={<UpdateLibro/>}/>
            <Route path="/deletelibro/:id" element={<DeleteLibro/>}/>

            <Route path="/crearlibro" element={<CreateLibro/>}/>
            
            </>
            :
              /*Si el usuario intenta ir a una ruta que no existe se le devolvera al login*/
              <Route path="/*" element={<Navigate to={'/inicio'}/>}/>
        }
    </Routes>
  )
}
