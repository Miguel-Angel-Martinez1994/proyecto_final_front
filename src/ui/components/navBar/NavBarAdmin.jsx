import { NavLink } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"
import { useContext } from "react"



export const NavBarAdmin = () => {

    const {logout}=useContext(UserContext)

    const handlerClick=()=>{
        logout()
    }
  return (
    <>
   
        <nav className="navbar">
        <img src="logo.png"  className="logotipo"/>
        <div className="navbar-center">
            <ul className="nav-links">
                <li>
                    <NavLink to="/inicio">INICIO</NavLink>
                </li>
                <li>
                    <NavLink to="/crearlibro">CREAR LIBRO</NavLink>
                </li>
               
                </ul>
        </div>

        <NavLink to="/login" >Login</NavLink>
       
</nav> 
     
    </>
  )
}
