import React from 'react'
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faList, faAngleDown, } from '@fortawesome/free-solid-svg-icons'
import { Button, Dropdown } from 'react-bootstrap'

export default function ProductList() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-5'>
        <div className='fs-16'>95 products found</div>
        <div className='d-flex align-items-center gap-3'>
          <Button variant='outline-secondary' className='text-info'>
            <FontAwesomeIcon icon={faTableCellsLarge} className='text-blue' />
          </Button>
          <Button variant='outline-secondary' className='text-info'>
            <FontAwesomeIcon icon={faList} />
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className='text-info' >
              Default Sorting
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sort A - Z</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Higher First</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Lower First</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Button className='border border-secondary px-3 py-2 rounded'>
            <span className='me-2 text-blue'>Default Sorting</span>
            <FontAwesomeIcon icon={faAngleDown} className='text-blue'/>
          </Button> */}
        </div>
      </div>
      <Products />
    </>
  )
}