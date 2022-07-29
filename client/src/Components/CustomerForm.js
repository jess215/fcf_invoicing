import React, { useContext, useState } from 'react'
import axios from 'axios'
import { DataContext } from '../Providers/DataProvider'

const CustomerForm = (props) => {
  // const { addCustomer, updateCustomer } = useContext(DataContext)
  const [firstName, setFirstName] = useState(
    props.firstName ? props.firstName : ''
  )
  const [lastName, setLastName] = useState(props.lastName ? props.lastName : '')
  const [email, setEmail] = useState(props.email ? props.email : '')
  const [company, setCompany] = useState(props.company ? props.company : '')
  const [customerCat, setCustomerCat] = useState(
    props.customerCat ? props.customerCat : ''
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      firstName,
      lastName,
      email,
      company,
      customerCat,
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
      props.updateCustomer({ id: props.id, firstName, lastName })
      console.log('update here:')
      if (props.setShowEditForm) {
        props.setShowEditForm(false)
      }
    } else {
      props.addCustomer({ firstName, lastName })
      console.log('create here:', { firstName, lastName })
    }
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? 'Edit' : 'New'}</h1>
      <p>First Name</p>
      <input
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <p>Last Name</p>
      <input
        value={lastName}
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
