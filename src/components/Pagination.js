import React from 'react'

const Pagination = () => {
  return (
    <div className='d-flex justify-content-end'>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li className="page-item" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item"><span className="page-link" >2</span></li>
          <li className="page-item"><span className="page-link" >3</span></li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;