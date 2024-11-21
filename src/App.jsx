import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'
import { NavBar } from './ui/components/navBar/NavBar'




function App() {
 

  return (
    <>
    <UserProvider>
      <header>
        <NavBar/>
      </header>
      <main><AppRouters/></main>

      <footer>copyright</footer>        

    </UserProvider>
    </>
  )
}

export default App
