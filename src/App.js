import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component"

import 'bootstrap/dist/css/bootstrap.min.css'

import { movies$ } from './movies.js'

import Movie from './components/MovieCard.js'
import Pagination from './components/Pagination.js'
import Button from './components/Button.js'

const App = () => {
  const [movies, setMovies] = useState()
  const [selected, setSelected] = useState([])
  const [sortedArray, setSortedArray] = useState(movies)
  const [pagination, setPagination] = useState(false)
  let options = []
  let selectedMovies = []

  useEffect(() => {
    movies$.then((value) => {
      setMovies(value)
    })
  },[])

  if(!movies) {
    return <h1>Chargement...</h1>
  }

  movies.map(element => {
    if (!options.find(option => option.value === element.category)) {
      options = [ ...options, { label: element.category, value: element.category } ]
    }
    return options
  })

  const handleLike = (id) => {
    const array = [...movies]
    const index = array.findIndex(element => element.id === id)
    let { likes } = array[index]
    likes += 1
    array[index] = {
      ...array[index],
      likes
    }
    setMovies(array)
  }

  const handleDislike = (id) => {
    const array = [...movies]
    const index = array.findIndex(element => element.id === id)
    let { dislikes } = array[index]
    dislikes += 1
    array[index] = {
      ...array[index],
      dislikes
    }
    setMovies(array)
  }

  const handleDelete = (id) => {
    const index = movies.findIndex(element => element.id === id)
    const array = [...movies]
    array.splice(index, 1)
    setMovies(array)
  }

  if(selected.length !== 0) {
    for (let index = 0; index < selected.length; index++) {
      const selectedCategory = movies.filter(element => element.category === selected[index].value)
      selectedMovies = [...selectedMovies, ...selectedCategory]
    }
  }

  const triArray = (size) => {
    let tempArray = []
    let arraySlice = []
    for (let index = 0; index < movies.length; index+=size) {
      arraySlice = movies.slice(index, index+size)
      tempArray.push(arraySlice)
    }
    setPagination(true)
    setSortedArray(tempArray)
  }

  return (
    <div className='container my-3'>
      <div className='row align-items-center'>
        <div className='col-6'>
          <h1>Movies</h1>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          <Button size="4" triArray={triArray}/>
          <Button size="8" triArray={triArray}/>
          <Button size="12"triArray={triArray}/>
        </div>
      </div>

      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        hasSelectAll={false}
      />
      <div className='row'>
        {selectedMovies.length !== 0 && !pagination &&
          selectedMovies.map(element => {
            return(
              <Movie 
                key={element.id}
                id={element.id}
                title={element.title}
                category={element.category}
                likes={element.likes}
                dislikes={element.dislikes}
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleDelete={handleDelete}
              />
            )
          })
        }
        {selectedMovies.length === 0 && !pagination &&
          movies.map(element => {
            return(
              <Movie 
                key={element.id}
                id={element.id}
                title={element.title}
                category={element.category}
                likes={element.likes}
                dislikes={element.dislikes}
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleDelete={handleDelete}
              />
            )
          })
        }
        {pagination &&
          <Pagination 
            handleLike={handleLike}
            handleDislike={handleDislike}
            handleDelete={handleDelete}
            sortedArray={sortedArray}
          />
        }
      </div>
    </div>
  )
}

export default App