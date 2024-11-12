import React from 'react'

export const CardLibro = ({id,titulo,autor,sinopsis,genero}) => {
  return (
    <>
        <article>
            <h3>{genero}</h3>
            <h3>{titulo}</h3>
            <h3>{autor}</h3>
            <h3>{sinopsis}</h3>
        </article>
    </>
  )
}
