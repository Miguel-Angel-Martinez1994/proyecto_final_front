import { useContext } from "react"
import "./homePage.css"
import { UserContext } from "../../../context/UserContext"
import { GaleriaLibro } from "../galeriaLibro/GaleriaLibro"
import { CardLibro } from "../cardLibro/CardLibro"


export const HomePage = () => {

  
  return (
    <>
           
            <div className="section-buscador">
            
              <input type="search" placeholder="Busca un libro" id="Buscador"/>
              <button className="button_send">Enviar</button>
            </div>

            <section className="gallery_book">
            
              <GaleriaLibro/>
                
            </section>
        
    </>
  )
}

