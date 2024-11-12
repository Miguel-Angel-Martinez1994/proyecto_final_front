import React from 'react'
import { CardLibro } from './CardLibro'

export const GridLibros = ({categoria}) => {
    console.log("entrando en grid libros",categoria)

    const dataFetch=[
        {
            id:1,
            nombre:"El Quijote",
            autor:"Miguel de Cervantes",
            sinopsis:"En un lugar de la mancha...",
            genero:"fantasia"
        },
        {
            id:2,
            nombre:"ejemplo2",
            autor:"autor2",
            sinopsis:"mucho texto2",
            genero:"genero2"
        },
        {
            id:3,
            nombre:"ejemplo3",
            autor:"autor3",
            sinopsis:"mucho texto3",
            genero:"genero3"
        },
        {
            id:4,
            nombre:"ejemplo4",
            autor:"autor4",
            sinopsis:"mucho texto4",
            genero:"genero4"
        }
    ]

  return (
    <>
    <section>
        {
        
            dataFetch.map((libro)=>(
                <CardLibro key={libro.id} {...libro}/>
            ))
        }

    </section>
    </>
  )
}
