import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [invoices, setInvoices] = useState([])
  const [customers, setCustomers] = useState([])
  const [items, setItems] = useState([])
  const [payments, setPayments] = useState([])

  useEffect(() => {
    getInvoices()
  }, [])

  const getInvoices = async () => {
    try {
      let res = await axios.get('/api/invoices')
      setInvoices(res.data)
    } catch (err) {
      alert('Error in getInvoices in Data Provider')
    }
  }

  const addInvoice = async (invoice) => {
    try {
      let res = await axios.post('/api/invoices', invoice)
      setInvoices([res.data, ...invoices])
    } catch (err) {
      alert('Error in addInvoice in Data Provider')
    }
  }

  const updateInvoice = async (invoice) => {
    try {
      let res = await axios.put(`/api/invoices/${id}`, invoice)
      let updateInvoices = invoices.map((inv) =>
        inv.id === res.data.id ? res.data : inv
      )
      setInvoices(updateInvoices)
    } catch (err) {
      alert('Error in updateInvoice in Data Provider')
    }
  }
}
