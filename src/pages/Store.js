import React, { useState } from 'react'
import Title from '../components/Title/Title'
import Cart from '../components/Cart/Cart'
import Content from '../components/Content/Content'

const Store = () => {
  const [showCart, setShowCart] = useState(false)

  const cartHandler = () => {
    setShowCart((prev) => !prev)
  }
  return (
    <main>
      {showCart && <Cart onClick={cartHandler} />}
      <Title />
      <Content onClick = {cartHandler} />
    </main>
  )
}

export default Store