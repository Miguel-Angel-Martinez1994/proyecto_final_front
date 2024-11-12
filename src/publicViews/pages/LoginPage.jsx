import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const {mensaje, usuario,setUsuario,isAuthenticated,login}=useContext(UserContext)

  //hook que retorna una funcion que nos permite navegar de forma programada, lo usaremos para que una vez se ha loggeado el usuario, le mande a la pagina de admin
  const navigate=useNavigate()

  const handleSubmit =(ev)=>{
    //prevenimos el evento por defecto
    ev.preventDefault()

    //guardamos en variables el nombre y la contraseña que ha escrito el usuario en el formulario, obviando los espacios tanto delante como detras
    const nombre=ev.target.nombre.value.trim()
    const password=ev.target.password.value.trim()

    const usuarioLogueado={
      //aqui guardaremos en formato JSON los datos que recibimos via token de firebase, del usuario que se ha logueado y verificaremos el rol que tendra
      id:1,
      nombre,
    }

    setUsuario(usuarioLogueado)
    login()
    navigate("/admin")
  }
  return (
    <>
        <div className="background"></div>
          <div className="card">
            <form 
              className="form"
              id='login'
              onSubmit={handleSubmit}>
                <input 
                  type="text"
                  name='nombre'
                  id='nombre'
                  placeholder='Escribe tu nombre'/>

                  <input
                    type="password"
                    name='password'
                    id='password'
                    placeholder='Escriba su password'
                  />

                  <button type='submit'>
                      Iniciar Sesion
                  </button>
              </form>
          </div>
    </>
  )
}
