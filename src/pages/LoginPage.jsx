import React, { useState, useContext } from 'react'
import classes from './LoginPage.module.css'
import AuthContext from '../store/auth-context'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    let url
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmr5sXXkMrGtc5IBN2M6Y9ctDJ2euVWNA'
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmr5sXXkMrGtc5IBN2M6Y9ctDJ2euVWNA'
    }

    try {
      const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: userName,
          password: userPass,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setIsLoading(false)
      if (resp.ok) {
        const data = await resp.json()
        authCtx.login(data.idToken, userName)
        console.log(data)
        navigate('/store')
        
      } else {
        let errorMessage = 'Authentication failed'
        const data = await resp.json()
        console.log(data)
        errorMessage = data.error.message
        throw new Error(errorMessage)
      }
    } catch (error) {
      window.alert(error.message)
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.formInside}>
        <h2>Please {isLogin ? 'Login' : 'Sign Up'} Here</h2>
        <div className={classes.enterVal}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={classes.enterVal}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
        </div>
        {/* <button type='submit'>Submit</button> */}
        {!isLoading && (
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        )}
        {!isLoading && (
          <button type='submit'>
            {isLogin ? 'Submit For Login' : 'Submit For Create Account'}
          </button>
        )}
        {isLoading && (
          <p>
            <b>Sending Requests...</b>
          </p>
        )}
        {authCtx.isLoggedIn && (
          <button onClick={() => authCtx.logout()}>Logout</button>
        )}
      </div>
    </form>
  )
}

export default LoginPage