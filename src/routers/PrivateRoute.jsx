import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext"
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const {isAuthenticated}=useContext(UserContext);

  return isAuthenticated 
    ?
    children
    :
    <Navigate to="/home"/>
}
