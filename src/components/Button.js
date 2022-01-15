import React from 'react'

const Button = ({ size, triArray }) => {
  return (
    <div>
      <button 
        type="button" 
        className="ms-2 btn btn-outline-light" 
        onClick={() => triArray(Number(size))}
      >
        {size}
      </button>
    </div>
  )
}

export default Button