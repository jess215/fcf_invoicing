import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Invoices = () => {
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
      console.log('OPEN:', res.data)
    } catch (err) {
      alert('Error in getting open invoices')
    }
  }

  return (
    <div className="container">
      <h1>Open Invoices</h1>
      {JSON.stringify(open)}
    </div>
  )
}

export default Invoices
