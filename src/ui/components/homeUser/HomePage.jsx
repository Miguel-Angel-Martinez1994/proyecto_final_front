
import { useContext } from "react"
import { NavBarUser } from "../navBarUser/NavBarUser"
import "./homePage.css"
import { UserContext } from "../../../context/UserContext"
import { GaleriaLibro } from "../galeriaLibro/GaleriaLibro"
import { CardLibro } from "../cardLibro/CardLibro"


export const HomePage = () => {

  
  return (
    <>
        <header>
            <div className="logo"><img src="logo.png"  className="logotipo"/></div>
            <nav className="navbar">
            <NavBarUser/>
            </nav>  
        </header>
    
        
            <div className="section-buscador">
              <h1>Bibilioteca</h1>
              <input type="search" placeholder="Busca un libro" id="Buscador"/>
              <button className="button_send">Enviar</button>
            </div>

            <GaleriaLibro>
                <CardLibro key={1} id={1} titulo={"titulo1"} autor={"autor1"} sinopsis={"resumen"} genero={"fantasia"}/>
            </GaleriaLibro>
        
    </>
  )
}
