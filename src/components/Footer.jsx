import React from 'react'
import { Col, Row, Form, InputGroup, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Logo from '../assets/logo/Logo'


export default function Footer() {
  return (
    <Row className='footer align-items-center justify-content-center text-white'>
      <Col md={3} className='text-center'>
        <Logo width='172.28' height='173' />
      </Col>
      <Col md={3}>
        <p className='m-0'><span className='fw-bold'>Email:</span> anemal@anemalstore.com</p>
        <p className='m-0'><span className='fw-bold'>Address:</span> 123#14</p>
        <p className='m-0'><span className='fw-bold'>Email:</span> +1 23 456 78 9</p>
        <hr className='text-yellow' style={{width: '120px'}} />
        <p className='fw-bold'>FOLLOW US</p>
        <div className='d-flex'>
          <div className='footer-icons d-flex justify-content-center align-items-center me-2'>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className='footer-icons d-flex justify-content-center align-items-center me-2'>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className='footer-icons d-flex justify-content-center align-items-center me-2'>
            <FontAwesomeIcon icon={faTiktok} />
          </div>
          <div className='footer-icons d-flex justify-content-center align-items-center me-2'>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </Col>
      <Col md={6}>
        <Container>
          <h3 className='text-uppercase'>Newsletter</h3>
          <p>Sign up for subscribe out newsletter!</p>
          <InputGroup className="mb-3">
            <Form.Control
              className='py-3 border border-0'
              placeholder="Your Email"
            />
            <Button className='text-uppercase text-white' variant='info'>Subscribe</Button>
          </InputGroup>
        </Container>
      </Col>
    </Row>
  )
}
