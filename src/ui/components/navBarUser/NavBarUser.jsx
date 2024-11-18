import { NavLink } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"
import { useContext } from "react"


export const NavBarUser = () => {

    const {logout}=useContext(UserContext)

    const handlerClick=()=>{
        logout()
    }
  return (
    <>
   
        <ul>
            <li>
                <NavLink
                    to="/home"
                >
                    Home

                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/crearLibro"
                >
                    Nuevo Libro
                </NavLink>
            </li>

            <li>
                <div className="navbar-icons">
                    <button  onClick={handlerClick} id="boton-salir">Salir</button>
                </div>
            </li>
        </ul>
     
    </>
  )
}
