import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../Providers/DataProvider'

const CustomerForm = (props) => {
  // const { addCustomer, updateCustomer } = useContext(DataContext)
  const [first_name, setFirstName] = useState(
    props.first_name ? props.first_name : ''
  )
  const [last_name, setLastName] = useState(
    props.last_name ? props.last_name : ''
  )
  const [email, setEmail] = useState(props.email ? props.email : '')
  const [company, setCompany] = useState(props.company ? props.company : '')
  const [customer_cat, setCustomerCat] = useState(
    props.customer_cat ? props.customer_cat : ''
  )
  const [phone, setPhone] = useState(props.phone ? props.phone : '')
  const [mobile, setMobile] = useState(props.mobile ? props.mobile : '')
  const [fax, setFax] = useState(props.fax ? props.fax : '')
  const [website, setWebsite] = useState(props.website ? props.website : '')
  const [street, setStreet] = useState(props.street ? props.street : '')
  const [city, setCity] = useState(props.city ? props.city : '')
  const [state, setState] = useState(props.state ? props.state : '')
  const [zip, setZip] = useState(props.zip ? props.zip : '')
  const [country, setCountry] = useState(props.country ? props.country : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({
      first_name,
      last_name,
      email,
      company,
      customer_cat,
      phone,
      mobile,
      fax,
      website,
      street,
      city,
      state,
      zip,
      country,
    })

    if (props.id) {
      props.updateCustomer({
        id: props.id,
        first_name,
        last_name,
        email,
        company,
        customer_cat,
        phone,
        mobile,
        fax,
        website,
        street,
        city,
        state,
        zip,
        country,
      })
      console.log('update here:')
      if (props.setShowEditForm) {
        props.setShowEditForm(false)
      }
    } else {
      props.addCustomer({
        first_name,
        last_name,
        email,
        company,
        customer_cat,
        phone,
        mobile,
        fax,
        website,
        street,
        city,
        state,
        zip,
        country,
      })
      console.log('create here:', { first_name, last_name })
    }
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? 'Edit' : 'New'}</h1>
      <p>First Name</p>
      <input
        value={first_name}
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <p>Last Name</p>
      <input
        value={last_name}
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      />
      <br />
      <button>{props.id ? 'update' : 'save'}</button>
    </form>
  )
}

export default CustomerForm
