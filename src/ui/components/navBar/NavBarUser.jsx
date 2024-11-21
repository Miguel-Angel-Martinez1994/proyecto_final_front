
import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import {  NavLink } from "react-router-dom"

export const NavBarUser = () => {

    const {logout}=useContext(UserContext)

    const handlerClick=()=>{
        logout()
    }

  return (
    <>
        <nav className="navbar">
        <img src="logo.png"  className="logotipo"/>
            <div className="navbar-center">
                

                <NavLink to="/login" >Login</NavLink>
            </div>

        </nav>
    </>
  )
}
