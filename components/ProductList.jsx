import React from 'react'
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faRectangleList } from '@fortawesome/free-solid-svg-icons'

export default function ProductList() {
  return (
    <>
      <div className='d-flex justify-content-between p-5'>
        <div>95 products found</div>
        <div>
          <FontAwesomeIcon icon={faTableCellsLarge} className='text-blue fs-3 me-2' />
          <FontAwesomeIcon icon={faRectangleList} className='text-blue fs-3'/>
        </div>
      </div>
      <Products />
    </>
  )
}
