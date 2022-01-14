import React from 'react'

import styled from 'styled-components'

const AwesomeIcon = styled.i`
    font-size : 30px;
    cursor : pointer;
    transition : all ease 0.4s;
    &:hover {
        color : #81ecec;
    }
`

const Icon = (props) => {
  const { className } = props
  return (
    <div>
      <AwesomeIcon 
        className={className}
      />
    </div>
  )
}

export default Icon