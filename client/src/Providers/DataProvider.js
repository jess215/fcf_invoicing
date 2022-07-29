import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [invoices, setInvoices] = useState([])
  const [items, setItems] = useState([])
  const [payments, setPayments] = useState([])
  const [customers, setCustomers] = useState([])

  //// INVOICES ////

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

  const deleteInvoice = async (id) => {
    try {
      await axios.delete(`/api/invoices/${id}`)
      setInvoices(invoices.filter((inv) => inv.id !== id))
    } catch (err) {
      alert('Error in deleteInvoice in Data Provider')
    }
  }

  //// ITEMS ////

  const addItem = async (invoiceId, item) => {
    try {
      let res = await axios.post(`/api/invoices/${invoiceId}/items`, item)
      setItems([res.data, ...items])
    } catch (err) {
      alert('Error in addItem in Data Provider')
    }
  }

  const updateItem = async (invoiceId, item) => {
    try {
      let res = await axios.put(
        `/api/invoices/${invoiceId}/items/${item.id}`,
        item
      )
      let updateItems = items.map((itm) =>
        itm.id === res.data.id ? res.data : itm
      )
      setItems(updateItems)
    } catch (err) {
      alert('Error in updateItem in Data Provider')
    }
  }

  const deleteItem = async (invoiceId, itemId) => {
    try {
      let res = await axios.delete(`/api/invoices/${invoiceId}/items/${itemId}`)
      let updateItems = items.filter((itm) => itm.id !== res.data.id)
      setItems(updateItems)
    } catch (err) {
      alert('Error in deleteItem in Data Provider')
    }
  }

  //// PAYMENTS ////

  //// CUSTOMERS ////

  return (
    <DataContext.Provider
      value={{
        addInvoice,
        updateInvoice,
        deleteInvoice,
        addItem,
        updateItem,
        deleteItem,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
