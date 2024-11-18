import React from 'react'

export const CardLibro = ({id,titulo,autor,sinopsis,genero}) => {

  return (
    <>
        <div className='card'>
            <h2>{titulo}</h2>
            <p>{autor}</p>
            <p>{sinopsis}</p>
            <p>{genero}</p>
        </div>
    </>
  )
}
