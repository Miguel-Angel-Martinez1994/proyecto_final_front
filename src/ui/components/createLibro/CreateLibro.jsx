import "./createLibro.css"

export const CreateLibro = () => {
  return (
    <>
      <h1>CREAR LIBRO</h1>

      <main>
          <form className="book-form">
            <label htmlFor="titulo">Titulo</label> 
            <input type="text" id="titulo" name="titulo" placeholder="Titulo" required/>

            <label htmlFor="idioma">Idioma</label>
            <input type="text" id="idioma" name="idioma" placeholder="Idioma" required/>

            <label htmlFor="titulo_original">Titulo Original</label>
            <input type="text" id="titulo_original" name="titulo_original" placeholder="Titulo original" required/>

            <label htmlFor="autor">Autor</label>
            <input type="text" id="autor" name="autor" placeholder="Autor" required/>

            <label htmlFor="sinopsis">Sinopsis</label>
            <textarea rows="4" id="sinopsis" name="sinopsis" placeholder="Sinopsis" required/>

            <label htmlFor="genero">Genero</label>
            <select id="genero" name="genero" required>
                <option value="">Seleccione un genero</option>
                <option value="accion">Accion</option>
                <option value="romance">Romance</option>
                <option value="poesia">Poesia</option>
                <option value="educativo">Educativo</option>
                <option value="aventura">Aventura</option>
            </select>

            <button type="submit">Crear</button>
          </form>
      </main>
    </>
  )
}
