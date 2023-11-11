import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import CartContext from './cart-context'
import AuthContext from './auth-context'

const ProductsArr = [
  {
    id: 'm1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    rating: 3.5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 'm2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    rating: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 'm3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    rating: 4.3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 'm4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    rating: 3.3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
]

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext)
  const [items, setItems] = useState([])
  const [productsArr, setProductsArr] = useState(ProductsArr)
  const url = `https://crudcrud.com/api/be933d90a0214690842289866dc3a78a/${authCtx.email}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setItems(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [url])

  const postData = async (item) => {
    try {
      await axios.post(url, item)
      const response = await axios.get(url)
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addItemToCartHandler = async (item) => {
    const itemPresent = items.find((cartItem) => cartItem.title === item.title)

    if (itemPresent) {
      alert('This item is already added to the cart')
    } else {
      await postData(item)
    }
  }

  const removeItemFromCartHandler = async (_id) => {
    try {
      await axios.delete(`${url}/${_id}`)
      const response = await axios.get(url)
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateItemHandler = async (item) => {
    try {
      const updatedData = {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        rating: item.rating,
        description: item.description,
        quantity: item.quantity,
      }

      await axios.put(`${url}/${item._id}`, updatedData)
      const response = await axios.get(url)
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const cartContext = {
    items: items,
    products: productsArr,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
