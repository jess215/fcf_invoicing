import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Service Date</TableCell>
            <TableCell>Invoice Date</TableCell>
            <TableCell>Paid Date</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {closed.map((closed) => (
            <TableRow key={closed.id}>
              <TableCell>{closed.id}</TableCell>
              <TableCell>
                {closed.first_name} {closed.last_name}
              </TableCell>
              <TableCell>{closed.company}</TableCell>
              <TableCell>Service Date</TableCell>
              <TableCell>{closed.invoice_date}</TableCell>
              <TableCell>Paid Date</TableCell>
              <TableCell>{closed.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    // <div>
    //   <h2>Closed Invoices</h2>
    //   {JSON.stringify(closed)}
    // </div>
  )
}

export default ClosedInvoices
