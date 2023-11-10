import React from 'react'
import classes from './Footer.module.css'
import { FaYoutubeSquare, FaSpotify, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.mains}>
        <div>
          <h1>The Generics</h1>
        </div>
        <div>
          <FaYoutubeSquare size={30} />
          <FaSpotify size={30} />
          <FaFacebookF size={30} />
        </div>
      </div>
    </div>
  )
}

export default Footer