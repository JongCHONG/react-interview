import React from 'react'

import styled from 'styled-components'
import image from '../images/movieImage.jpg'
// import Icon from './Icon'

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
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
  height: 5px;
  width: 100%;
  position: relative;
  background-color: red;
`
const LikeBar = styled.div`
  height: 5px;
  position: absolute;
  background-color: #6d1d1d;
  transition: width 1s;
  width: ${props => props.ratio}%
`
const LikeDislike = styled.div`
  display: flex;
  justify-content: space-around;
`
const Icon = styled.i`
    font-size : 30px;
    cursor : pointer;
    transition : all ease 0.4s;
    &:hover {
        color : red;
    }
`

const Movie = (props) => {
  const { id, title, category, likes, dislikes, handleLike, handleDislike, handleDelete } = props
  // const [ratio, setRatio] = useState(null)
  const ratio = ((likes)/(likes + dislikes))* 100

  // console.log(ratio)
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className='card p-2 m-1'>
        <Image/>
        <Title>
          {title}
          <Icon
            className="far fa-trash-alt" 
            onClick={() => handleDelete(id)} 
          /> 
        </Title>
        <p>Category : {category}</p>
        <LikeDislike>
          <p>{likes}</p>
          <Icon
            className="far fa-thumbs-up" 
            onClick={() => handleLike(id)} 
          /> 
          <p>{dislikes}</p>
          <Icon
            className="far fa-thumbs-down" 
            onClick={() => handleDislike(id)} 
          /> 
        </LikeDislike>
        <DislikeBar>
          <LikeBar ratio={ratio} />
        </DislikeBar>
      </div>
    </div>
  )
}

export default Movie;