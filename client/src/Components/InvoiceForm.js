import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../Providers/DataProvider'

const InvoiceForm = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [terms, setTerms] = useState(props.terms || '')
  const [summary, setSummary] = useState(props.summary || '')
  const [invoice_date, setInvoiceDate] = useState(props.invoice_date || '')
  const [paid, setPaid] = useState(props.paid || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.id) {
      props.updateInvoice(props.customerId, {
        id: props.id,
        terms,
        summary,
        invoice_date,
        paid,
      })
      console.log('update here:')
    } else {
      props.addInvoice(props.customerId, { terms, summary, invoice_date, paid })
    }
    setTerms('')
    setSummary('')
    setInvoiceDate('')
    setPaid('')
  }

  return (
    <div className="container">
      <h1>New Invoice</h1>
      <form>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InvoiceForm
