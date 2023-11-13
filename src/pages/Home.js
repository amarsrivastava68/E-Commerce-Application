import React from 'react'
import Title from '../components/Title/Title'
import { FaRegPlayCircle } from 'react-icons/fa'
import classes from './Home.module.css'
const Home = () => {
  return (
    <div>
      <Title />
      <div className={classes.home}>
        <div className={classes.play}>
          <p>Get our Latest Album</p>
          <FaRegPlayCircle size={40} />
        </div>
        <h1>TOURS</h1>
        <div className={classes.tourDetails}>
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button>BUY TICKETS</button>
        </div>
        <div className={classes.tourDetails}>
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button>BUY TICKETS</button>
        </div>
        <div className={classes.tourDetails}>
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button>BUY TICKETS</button>
        </div>
        <div className={classes.tourDetails}>
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button>BUY TICKETS</button>
        </div>
        <div className={classes.tourDetails}>
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button>BUY TICKETS</button>
        </div>
        <div className={classes.tourDetails}>
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button>BUY TICKETS</button>
        </div>
      </div>
    </div>
  )
}

export default Home