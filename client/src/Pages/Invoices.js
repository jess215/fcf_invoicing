import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import OpenInvoices from '../Components/OpenInvoices'
import ClosedInvoices from '../Components/ClosedInvoices'

const Invoices = () => {
  return (
    <div className="container">
      <h1>Invoices</h1>
      <OpenInvoices />
      <ClosedInvoices />
    </div>
  )
}

export default Invoices
