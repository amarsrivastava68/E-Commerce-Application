import React, { useContext } from 'react'
import classes from './Content.module.css'

import CartContext from '../../store/cart-context'


const Content = (props) => {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx.products)
  return (
    <div className={classes.content}>
      <button
        className={classes.btn2}
        onClick={() => {
          props.onClick()
        }}
      >
        cart ({cartCtx.items.length})
      </button>
      <h1 className={classes.h1}>MUSIC</h1>
      <div className={classes.products}>

        {cartCtx.products.map((each) => (
          <>
          <p>{each.id}</p>
          <p>{each.title}</p>
          <p>{each.description}</p>
          <p>{each.imageUrl}</p>
          <p>{each.rating}</p>
          <p>{each.price}</p>
          </>

        ))}
        {/* //{id, title, price, imageUrl, rating, description} */}
      </div>
      <button
        className={classes.btn}
        onClick={() => {
          
        }}
      >
        See the cart
      </button>
    </div>
  )
}

export default Content