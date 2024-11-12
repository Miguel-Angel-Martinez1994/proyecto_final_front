
import { useUser } from "../../hooks/useUser"
import { NavBarAdmin } from "./NavBarAdmin"
import { NavBarUser } from "./NavBarUser"

export const NavBar = () => {
    const {isAuthenticated}=useUser()

    return (
        <>
            {
                isAuthenticated
                    ?
                    <NavBarAdmin/>
                    :
                    <NavBarUser/>
            }
        </>
      )
}
