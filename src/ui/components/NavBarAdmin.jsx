import { NavLink } from "react-router-dom"


export const NavBarAdmin = () => {
  return (
    <>
        <ul>
            <li>
                <NavLink
                    to="/admin"
                >
                    Admin

                </NavLink>
            </li>
        </ul>
    </>
  )
}
