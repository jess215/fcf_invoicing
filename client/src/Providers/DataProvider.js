import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [invoiceData, setInvoiceData] = useState([])

  useEffect(() => {
    getInvoiceData()
  }, [])

  const addInvoice = (invoice) => {
    setInvoiceData([...invoiceData, { invoice: invoice, items: [] }])
  }

  const deleteItem = async (invoice_id, id) => {
    let res = await axios.delete(`/api/invoices/${invoice_id}/items/${id}`)
    const filteredInvoices = invoiceData.map((inv) => {
      if (inv.invoice.id !== inv.id) {
        return inv
      } else {
        return {
          invoice: inv.invoice,
          items: inv.items.filter((i) => i.id !== id),
        }
      }
    })
    setInvoiceData(filteredInvoices)
  }

  const deleteInvoice = async (id) => {
    let res = await axios.delete(`/api/invoices/${id}`)
    const filteredInvoices = invoicesData.filter((inv) => inv.invoice.id !== id)
    setInvoiceData(filteredInvoices)
  }

  const getInvoiceData = async () => {
    let res = await axios.get(`/api/invoices`)
    setInvoiceData(res.data)
  }
  return (
    <DataContext.Provider
      value={{ invoiceData, addInvoice, deleteItem, deleteInvoice }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
