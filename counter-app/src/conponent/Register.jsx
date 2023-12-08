import React from 'react'
import './Register.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className='wrapper'>
       <form>
        <h2>Register page</h2>

        <div className='input-field'>
        <input type="text" />
          <label>Username</label>
        </div>

        <div className='input-field'>
        <input type="text" required />
            <label> Enter your email</label>
        </div>


        <div className='input-field'>
        <input type="password" required />
        <label> password</label>
        </div>

        <div className='input-field'>
        <input type="password" />
        <label>Confirm password</label>
        </div>

        <div className='forget'>
            <label htmlFor="remember">
            <input type="checkbox" id='remember' />
            <p>Remember me</p>
            </label>
        </div>

        <button type='submit'>Register</button>
        <span className='btn' type='submit'> <FcGoogle size={25} className='google'  /> Register with your google</span>

        <div className='register'>
            <p>Already have an account? <Link to={'/Login'}>Login</Link></p>

        </div>
       

        </form>

    </div>
  )
}

export default Register

