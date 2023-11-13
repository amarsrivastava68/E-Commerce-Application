import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../store/cart-context'
import classes from './EachProduct.module.css'

const EachProduct = () => {
  const cartCtx = useContext(CartContext)
  const params = useParams()

  const product = cartCtx.products.find((each) => each.id === params.productId)
  console.log(product)

  return (
    <div className={classes.eachProduct}>
      <div className={classes.imgReview}>
        <img src={product.imageUrl} alt={product.title} />
        <p>
          <i>
            <b>Reviews</b>
          </i>
        </p>
        <p>Suresh : 2022-11-14 : Nice Product</p>
        <p>Jon doe : 2021-06-12 : fantastic product</p>
      </div>
      <div className={classes.details}>
        <h1>{product.title}</h1>
        <p>
          <b>Rating : </b>
          {product.rating}
        </p>
        <p>
          <b>Price :</b> ${product.price}
        </p>
        <p>
          <b>Description :</b> {product.description}
        </p>
      </div>
    </div>
  )
}

export default EachProduct