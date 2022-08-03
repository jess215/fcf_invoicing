import React, { useState, useEffect, useContext } from 'react'
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
import { DataContext } from '../Providers/DataProvider'

const Customers = () => {
  const { editCustomer, deleteCustomer } = useContext(DataContext)
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers()
  }, [])

  const getCustomers = async () => {
    try {
      let res = await axios.get('/api/customers')
      setCustomers(res.data)
    } catch (err) {
      alert('Error in getting customers')
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                {customer.first_name} {customer.last_name}
              </TableCell>
              <TableCell>{customer.company}</TableCell>
              <TableCell>{customer.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Customers
