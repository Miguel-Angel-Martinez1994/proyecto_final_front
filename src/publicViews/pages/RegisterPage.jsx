

export const RegisterPage = () => {
  const handleSubmit=(ev)=>{
      ev.preventDefault()
  }

  return (
    <>
      <div className="background"></div>
        <div className="card">
        <form 
              className="form"
              id='register'
              onSubmit={handleSubmit}>
                  <input 
                    type="text"
                    name='nombre'
                    id='nombre'
                    placeholder='Nombre'/>

                  <input
                    type="text"
                    name='usuario'
                    id='usuario'
                    placeholder='Usuario'/>

                  <input
                    type="email"
                    name='correo'
                    id='correo'
                    placeholder='Correo Electronico'/>

                  <input
                    type="password"
                    name='password'
                    id='password'
                    placeholder='Escriba su password'/>

                  <button type='submit'>
                      Crear cuenta
                  </button>
        </form>

        </div>
    </>
  )
}
