import React, { useState } from 'react'

import Movie from './MovieCard'

const Pagination = (props) => {
  const { sortedArray } = props
  const [paginationArray, setPaginationArray] = useState(sortedArray)
  const [page, setPage] = useState(1)
  let numPage = []

  for ( let num = 1; num <= paginationArray.length; num++) {
    numPage.push(num)
  }

  const handleLike = (id) => {
    const array = [...paginationArray]
    const index = array[page - 1].findIndex(element => element.id === id)
    let { likes } = array[page - 1][index]
    likes += 1
    array[page - 1][index] = {
      ...array[page - 1][index],
      likes
    }
    setPaginationArray(array)
    console.log(array)
  }

  const handleDislike = (id) => {
    const array = [...paginationArray]
    const index = array[page - 1].findIndex(element => element.id === id)
    let { dislikes } = array[page - 1][index]
    dislikes += 1
    array[page - 1][index] = {
      ...array[page - 1][index],
      dislikes
    }
    setPaginationArray(array)
    console.log(array)
  }

  const handleDelete = (id) => {
    const index = paginationArray[page - 1].findIndex(element => element.id === id)
    const array = [...paginationArray]
    array[page - 1].splice(index, 1)
    setPaginationArray(array)
  }

  const handlePage = (page) => {
    setPage(page)
  }

  const handlePrevious = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }
  const handleNext = () => {
    if (page !== numPage.length) {
      setPage(page + 1)
    }
  }

  console.log("sorted", sortedArray)
  console.log("pagination", paginationArray)
  return (
    <>
    {paginationArray[page - 1].map(element => {
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
    })}
      <div className='d-flex justify-content-end'>
      <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={handlePrevious}>Previous</button>
            </li>
            {numPage.map(element => {
              return (
                <li key={element} className="page-item">
                  <button className="page-link" onClick={() => handlePage(element)}>{element}</button>
                </li>
              )
            })}
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination;