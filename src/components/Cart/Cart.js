import React, { useContext } from 'react'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  // const [cartItems, setCartItems] = useState([...cartElements])
  const cartCtx = useContext(CartContext)

  
  let total = cartCtx.items.reduce((acc, cur) => {
    
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
      {cartCtx.items.map((item) => {
        return <CartItem key={item.id} item={item} /> })}
      <h4>Total : {total}</h4>
      <button className={classes.btn}>PURCHASE</button>
    </div>
  )
}

export default Cart