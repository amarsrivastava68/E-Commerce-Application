import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
<Routes>

  <Route path = "/"  element={<LoginPage/>} />
</Routes>
<Footer />
    </BrowserRouter>
  )
}

export default App