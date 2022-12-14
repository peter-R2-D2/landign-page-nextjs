import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import PaginationProducts from './PaginationProducts'

export default function Products() {
  const products = [
    { title: 'Name of product', price: '$29.00', descount: '$39.00', id: 1 },
    { title: 'Name of product', price: '$29.00', descount: '$39.00', id: 2 },
    { title: 'Name of product', price: '$29.00', descount: '$39.00', id: 3 },
    { title: 'Name of product', price: '$29.00', descount: '$39.00', id: 4 },
    { title: 'Name of product', price: '$29.00', descount: '$39.00', id: 5 },
    { title: 'Name of product', price: '$29.00', descount: '$39.00', id: 6 },
  ]

  return (
    <Row>
      {
        products.map(product => (
          <Col md='4' key={product.id} className='mb-3'>
            <Card className='text-white bg-transparent border-0 product-card'>
              <Card.Img className='rounded-3 border-blue' variant='top' src="https://random.imagecdn.app/224/282" />
              <Card.Body>
                <p className='fs-20'>{product.title}</p>
                <span className='text-decoration-line-through'>{product.descount}</span>
                <h2 className='text-yellow'>{product.price}</h2>
                <div className='d-flex mt-4'>
                  <FontAwesomeIcon icon={faBagShopping} className='fs-4 text-blue' />
                  <p className='ms-3'>add to bag</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
      <Col md='12' className='d-flex justify-content-center'>
        <PaginationProducts />
      </Col>
    </Row>
  )
}
