import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
// import CartContext from '../../store/cart-context'
const Header = () => {
  // const cartCtx = useContext(CartContext)

  return (
    <header className={classes.header}>
      {/* <h4>E-commerce</h4> */}
      <ul className={classes.navList}>
        <li>
          <NavLink activeClassName={classes.active} to='/home'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to='/store'>
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to='/about'>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to='/login'>
            Login/Logout
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to='/contact'>
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header