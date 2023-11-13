import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import CartProvider from "./store/CartProvider";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import EachProduct from "./pages/EachProduct";
const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/store"
          element={authCtx.isLoggedIn ? <Store /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/contact"
          element={authCtx.isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />

        <Route path="/about" element={<About />} />
        <Route
          path="/products/:productId"
          element={
            authCtx.isLoggedIn ? <EachProduct /> : <Navigate to="/login" />
          }

        />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
