import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

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
            <Card className='text-white bg-body border-0'>
              <Card.Img className='rounded-3' variant='top' src="https://random.imagecdn.app/100/80" />
              <Card.Body>
                <h3>{product.title}</h3>
                <span className='text-decoration-line-through'>{product.descount}</span>
                <h2 className='text-yellow'>{product.price}</h2>
                <div className='d-flex'>
                  <FontAwesomeIcon icon={faBagShopping} className='fs-4 text-blue' />
                  <p className='ms-3'>add to bag</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}
