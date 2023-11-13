import React, { useState } from 'react'
import classes from './Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    let queryData = {
      name,
      email,
      phoneNumber,
    }
    // console.log(queryData)

    const response = await fetch(
      'https://ecommerceproject-4cf8a-default-rtdb.firebaseio.com/contact.json',
      {
        method: 'POST',
        body: JSON.stringify(queryData),
        headers: {
          'content-type': 'application/json',
        },
      }
    )

    const data = await response.json()
    
    alert('your contact information is submitted ')
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.formInside}>
        <h2>Contact Us For Your Queries</h2>
        <div className={classes.enterVal}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='email'>Email Id</label>
          <input
            id='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='phone'>Phone Number</label>
          <input
            id='phone'
            type='telephone'
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default Contact