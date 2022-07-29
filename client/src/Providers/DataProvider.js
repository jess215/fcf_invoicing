import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Invoices from '../Pages/Invoices'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [invoices, setInvoices] = useState([])
  const [customers, setCustomers] = useState([])
  const [items, setItems] = useState([])
  const [payments, setPayments] = useState([])

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice])
  }
}
