import React from 'react'

const CartContext = React.createContext({
  items: [],
  products: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id, quantity) => {},
})

export default CartContext