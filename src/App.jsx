import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'
import { Link } from 'react-router-dom'




function App() {
 

  return (
    <>
    <UserProvider>
      
      <AppRouters/>

        

    </UserProvider>
    </>
  )
}

export default App
