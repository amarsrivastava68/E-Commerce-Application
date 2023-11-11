import React, { useContext } from 'react'
import classes from './SingleProduct.module.css'
import CartContext from '../../store/cart-context'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const cartCtx = useContext(CartContext)

  const productAddHandler = () => {
    // console.log(props)

    cartCtx.addItem({ ...props.item, quantity: 1 })
  }

  return (
    <div className={classes.product}>
      <Link to={`/products/${props.item.id}`}>
        <div className={classes.title}>
          <h3>{props.item.title}</h3>
        </div>
      </Link>
      <Link to={`/products/${props.item.id}`}>
        <div className={classes.imgContainer}>
          <img src={props.item.imageUrl} alt='product image' />
        </div>
      </Link>
      <div className={classes.details}>
        <h4>${props.item.price}</h4>
        <button className={classes.btn} onClick={productAddHandler}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default Product