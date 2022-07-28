import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../Providers/DataProvider'

const InvoiceForm = () => {
  const { addInvoice } = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="container">
      <h1>New Invoice</h1>
    </div>
  )
}

export default InvoiceForm
