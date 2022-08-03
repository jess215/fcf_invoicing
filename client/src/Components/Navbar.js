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
          Invoices
        </Link>
        <Link className="navlink" to="/customers">
          Customers
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
