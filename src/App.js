import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import CartProvider from './store/CartProvider'
import Store from './pages/Store'

const App = () => {
  return (
    
    <CartProvider>
    
    <Header />
<Routes>

  <Route path = "/"  element={<LoginPage/>} />
  <Route path = "/store"  element={<Store/>} />
</Routes>
<Footer />
    </CartProvider>
  )
}

export default App