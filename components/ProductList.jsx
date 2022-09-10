import React from 'react'
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faList, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function ProductList() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-5'>
        <div className='fs-4'>95 products found</div>
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faTableCellsLarge} className='text-blue fs-4 me-2 border border-secondary px-3 py-2 rounded' />
          <FontAwesomeIcon icon={faList} className='text-blue fs-4 me-2 border border-secondary px-3 py-2 rounded'/>
          <div className='border border-secondary px-3 py-2 rounded'>
            <span className='me-2 text-blue'>Defatul Sorting</span>
            <FontAwesomeIcon icon={faAngleDown} className='text-blue'/>
          </div>
        </div>
      </div>
      <Products />
    </>
  )
}
