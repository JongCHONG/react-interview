import React from 'react'

import styled from 'styled-components'
import image from '../images/movieImage.jpg'

const Title = styled.h2`
  font-weight: bold;
`
const Image = styled.div`
  height: 250px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${image});
`

const Movie = (props) => {
  const { title, category, likes, dislikes } = props

  // const ratio = (likes - dislikes)/(likes + dislikes)

  console.log()
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className='card p-2 m-1'>
        <Image/>
        <Title>
          {title}
        </Title>
        <p>Category : {category}</p>
        <p>{likes}</p>
        <p>{dislikes}</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: ((likes-dislikes)/(likes+dislikes))*100}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  )
}

export default Movie;