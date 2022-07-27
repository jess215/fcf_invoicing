import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/invoices">
          Open Invoices
        </Link>
        <Link className="navlink" to="/invoices/new">
          New Invoice
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
