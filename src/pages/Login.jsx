import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const changeInput = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In Here</h2>
        <form className="form login__form">
          <p className="form__error-message">This is an error message</p>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInput} autoFocus/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInput} />
          <button type="submit" className='btn primary'>Sign In</button>
        </form>
        <small>Don't have an account? <Link to="/register">Sign Up here!</Link></small>
      </div>
    </section>
  )
}

export default Login