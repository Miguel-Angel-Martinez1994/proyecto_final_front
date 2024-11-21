import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import "./navBar.css"
import { NavBarAdmin } from './NavBarAdmin'
import { NavBarUser } from './NavBarUser'


export const NavBar = () => {
    const {isAuthenticated}=useContext(UserContext)


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
