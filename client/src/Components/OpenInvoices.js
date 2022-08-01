import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
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

  const columns = [
    { id: 'company', label: 'Company' },
    { id: 'name', label: 'Name' },
    { id: 'srv_date', label: 'Service Date' },
    { id: 'inv_date', label: 'Invoice Date' },
    { id: 'due_date', label: 'Due Date' },
    { id: 'total', label: 'Total' },
    { id: 'edit', label: 'Edit' },
  ]

  // const renderOpen = () => {
  //   return open.map((open) => <div key={`${open.id}`}></div>)
  // }

  return (
    <div key={`${open.id}`}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="open table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {/* <h2>Open Invoices</h2> */}
      <p>{open.id}</p>
      <p>{open.first_name}</p>
      {/* {JSON.stringify(open)} */}
    </div>
  )
}

export default OpenInvoices
