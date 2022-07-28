import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ClosedInvoices = () => {
  const [closed, setClosed] = useState([])

  const navigate = useNavigate()
  let nav = useNavigate()

  useEffect(() => {
    getClosed()
  }, [])

  const getClosed = async () => {
    try {
      let res = await axios.get('/api/closed')
      setClosed(res.data)
    } catch (err) {
      alert('Error in getting closed invoices')
    }
  }

  return (
    <div>
      <h2>Closed Invoices</h2>
      {JSON.stringify(closed)}
    </div>
  )
}

export default ClosedInvoices
