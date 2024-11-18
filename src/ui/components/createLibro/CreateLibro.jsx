import "./createLibro.css"

export const CreateLibro = () => {
  return (
    <>
      <header>
        <h1>CREAR LIBRO</h1>
      </header>

      <main>
          <form className="book-form">
            <label htmlFor="titulo">Titulo</label> 
            <input type="text" id="titulo" name="titulo" required/>

            <label htmlFor="autor">Autor</label>
            <input type="text" id="autor" name="autor" required/>
          </form>
      </main>
    </>
  )
}
