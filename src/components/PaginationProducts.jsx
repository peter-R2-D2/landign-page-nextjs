import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function PaginationProducts() {
  return (
    <Pagination>
      <Pagination.First className='btn-pg-first' />
      <Pagination.Prev className='btn-pg-prev' />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next className='btn-pg-next' />
      <Pagination.Last className='btn-pg-last' />
    </Pagination>
  )
}