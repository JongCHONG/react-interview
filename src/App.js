import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { movies$ } from './movies.js'
import Movie from './components/MovieCard.js'

const App = () => {
  const [movies, setMovies] = useState()

  movies$.then((value) => {
    setMovies(value)
  })

  if(!movies) {
    return <h1>Chargement...</h1>
  }

  // console.log(movies)
  return (
    <div className='container my-3'>
      <div className='row'>
        {movies.map(element => {
          return(
            <Movie 
              key={element.id}
              title={element.title}
              category={element.category}
              likes={element.likes}
              dislikes={element.dislikes}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App