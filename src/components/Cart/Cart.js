import React, { useContext } from 'react'

import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  // const [cartItems, setCartItems] = useState([...cartElements])
  const cartCtx = useContext(CartContext)

  console.log('swr23' , Object.values(cartCtx.items))
  let total = Object.values(cartCtx.items).reduce((acc, cur) => {
    
    return (acc = acc + Number(cur.price) * Number(cur.quantity))
  }, 0)

  return (
    <div className={classes.cart}>
      <button className={classes.crtBtn} onClick={props.onClick}>
        X
      </button>
      <h2>CART</h2>
      <div className={classes.cartDetails}>
        <h3>ITEM</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
      </div>
      {Object.values(cartCtx.items).map((item) => {
        <>
        <p>{item.id}</p>
        <p>{item.description}</p>
        <p>{item.rating}</p>
        </>
      })}
      <h4>Total : {total}</h4>
      <button className={classes.btn}>PURCHASE</button>
    </div>
  )
}

export default Cart