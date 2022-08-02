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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="open table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Service Date</TableCell>
            <TableCell>Invoice Date</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {open.map((open) => (
            <TableRow key={open.id}>
              <TableCell>{open.id}</TableCell>
              <TableCell>
                {open.first_name} {open.last_name}
              </TableCell>
              <TableCell>{open.company}</TableCell>
              <TableCell>Service Date</TableCell>
              <TableCell>{open.invoice_date}</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>{open.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  // return (
  //   <div>
  //     {open.map((open) => (
  //       <div key={`${open.id}`}>
  //         <p>{open.id}</p>
  //         <p>
  //           {open.first_name} {open.last_name}
  //         </p>
  //         <p>{open.company}</p>
  //         <p>{open.invoice_date}</p>
  //         <p>${open.total}</p>
  //       </div>
  //     ))}
  //     {/* <h2>Open Invoices</h2> */}
  //     {/* {JSON.stringify(open)} */}
  //   </div>
  // )
}

export default OpenInvoices
