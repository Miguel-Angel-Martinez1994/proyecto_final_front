import { NavLink } from "react-router-dom"


export const NavBarUser = () => {
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
                    to="/inicio"
                >
                    Inicio

                </NavLink>
            </li>
                
            <li>
                <NavLink
                    to="/categoria1">
                        Categoria1
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/categoria2">
                        Categoria2
                </NavLink>
            </li>
        </ul>
    </>
  )
}
