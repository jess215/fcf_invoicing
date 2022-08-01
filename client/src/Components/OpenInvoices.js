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
      // console.log('OPEN INVOICES:', res.data)
    } catch (err) {
      alert('Error in getting open invoices')
    }
  }

  const renderOpen = () => {
    return open.map((open) => <div key={`${open.id}`}></div>)
  }

  return open.map((open) => (
    <div key={`${open.id}`}>
      {/* <h2>Open Invoices</h2> */}
      <p>{open.id}</p>
      <p>{open.first_name}</p>
      {/* {JSON.stringify(open)} */}
    </div>
  ))
}

export default OpenInvoices
