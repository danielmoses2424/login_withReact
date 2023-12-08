import React from 'react'
import './Login.css'; 
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='wrapper'>
        <form>
        <h2>Login page</h2>

        <div className='input-field'>
        <input type="text" required />
            <label> Enter your email</label>
        </div>


        <div className='input-field'>
        <input type="password" required />
        <label>Eenter your password</label>
        </div>

        <div className='forget'>
            <label htmlFor="remember">
            <input type="checkbox" id='remember' />
            <p>Remember me</p>
            </label>
            <a href="#">forget password</a>
        </div>

        <button type='submit'>Log In</button>
        <span className='btn' type='submit'> <FcGoogle size={25} className='google'  /> Login with your google</span>

        <div className='register'>
            <p>Don't have an account? <Link to={'/Register'}>Register</Link></p>

        </div>
       

        </form>
    </div>
  )
}

export default Login
