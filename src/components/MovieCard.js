import React, { useState } from 'react'

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
const DislikeBar = styled.div`
  height: 10px;
  width: 100%;
  position: relative;
  background-color: yellow;
`
const LikeBar = styled.div`
  height: 10px;
  width: 50%;
  position: absolute;
  background-color: red;
`
const Like = styled.i`
    font-size : 30px;
    cursor : pointer;
    transition : all ease 0.4s;
    &:hover {
        color : #81ecec;
    }
`

const Movie = (props) => {
  const { title, category, likes, dislikes } = props
  const [ratio, setRatio] = useState(null)

  const handleLikeOnClick = () => {
    const result = ((likes - dislikes)/(likes + dislikes))*100
    console.log(result);
  }

  // console.log(ratio)
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
        <Like className="far fa-thumbs-up" onClick={handleLikeOnClick()}/>
        <DislikeBar>
          <LikeBar />
        </DislikeBar>
      </div>
    </div>
  )
}

export default Movie;