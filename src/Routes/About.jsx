import React from 'react'

export const About = () => {
  return (
    <div className='container mt-5'>
      <h2 className='tituloAbout mb-3'>Acerca de MovieSearch</h2>
      <p className='parrafoAbout'>MovieSearch es una plataforma creada con el objetivo de ayudar a los amantes del cine a descubrir y explorar nuevas películas. Ya sea que busques una película reciente, un clásico favorito o una joya oculta, nuestra herramienta te proporciona una manera rápida y sencilla de encontrar lo que más te interesa.</p>
      <p className='parrafoAbout'>A través de nuestra integración con la API de The Movie Database (TMDb), podemos ofrecerte una extensa base de datos de películas, con información detallada como sinopsis, trailers, puntuaciones y más. Solo tienes que escribir el nombre de la película que te interesa en nuestro buscador, ¡y nosotros nos encargamos del resto!</p>
      <p className='parrafoAbout'>Nos apasiona el cine y queremos compartir esa pasión contigo. En MovieSearch podrás:</p>
      <ul>
        <li className='listaAbout'>Buscar películas por nombre.</li>
        <li className='listaAbout'>Ver pósters y descripciones completas.</li>
        <li className='listaAbout'>Encontrar información relevante y actualizada de cada título.</li>
      </ul>
      <p className='parrafoAbout'>Esta aplicación fue desarrollada con React, lo que nos permite ofrecerte una experiencia rápida, interactiva y moderna. MovieSearch es tu compañero ideal para explorar el universo del cine y encontrar nuevas películas que se adapten a tu gusto. ¡Descubre, explora y disfruta del cine como nunca antes!</p>
    </div>
  )
}

