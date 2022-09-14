import React from 'react'
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faList, faAngleDown, } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default function ProductList() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-5'>
        <div className='fs-16'>95 products found</div>
        <div className='d-flex align-items-center'>
          <Button className='me-2 border border-secondary px-3 py-2 rounded'>
            <FontAwesomeIcon icon={faTableCellsLarge} className='text-blue' />
          </Button>
          <Button className='me-2 border border-secondary px-3 py-2 rounded'>
            <FontAwesomeIcon icon={faList} className='text-blue' />
          </Button>
          <Button className='border border-secondary px-3 py-2 rounded'>
            <span className='me-2 text-blue'>Defatul Sorting</span>
            <FontAwesomeIcon icon={faAngleDown} className='text-blue'/>
          </Button>
        </div>
      </div>
      <Products />
    </>
  )
}
