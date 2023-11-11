import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import CartProvider from './store/CartProvider'

const App = () => {
  return (
    
    <CartProvider>
    
    <Header />
<Routes>

  <Route path = "/"  element={<LoginPage/>} />
  <Route path = "/content"  element={<Content/>} />
</Routes>
<Footer />
    </CartProvider>
  )
}

export default App