import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'
import { NavBar } from './ui/components/NavBar'
import { Link } from 'react-router-dom'




function App() {
 

  return (
    <>
    <UserProvider>
      <header>BIBLIOTECA</header>
      <NavBar/>

        <main>
          <h1>MI BIBLIOTECA</h1>
          <AppRouters/>
        </main>

      <footer>
        <p><Link to='/registro'> Registrate</Link></p>
      </footer>
    </UserProvider>
    </>
  )
}

export default App
