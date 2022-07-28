import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const OpenInvoices = () => {
  const [open, setOpen] = useState([])

  const navigate = useNavigate()
  let nav = useNavigate()

  useEffect(() => {
    getOpen()
  }, [])

  const getOpen = async () => {
    try {
      let res = await axios.get('/api/open')
      setOpen(res.data)
    } catch (err) {
      alert('Error in getting open invoices')
    }
  }

  return (
    <div>
      <h2>Open Invoices</h2>
      {JSON.stringify(open)}
    </div>
  )
}

export default OpenInvoices
