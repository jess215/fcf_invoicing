import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const InvoiceForm = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="container">
      <h1>New Invoice</h1>
    </div>
  )
}

export default InvoiceForm
