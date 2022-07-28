import { Link, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Invoices from './Pages/Invoices'
import InvoiceForm from './Components/InvoiceForm'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/new" element={<InvoiceForm />} />
      </Routes>
    </div>
  )
}

export default App
