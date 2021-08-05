import React,{useState} from 'react'
import './Login.css'
const Login=()=>{
  const [login,setlogin]=useState(true)
  return (
    <>
      <div className='login-container' style={{display : login?"":"none"}}>
        <h1>Login</h1>
        <p>Login with Email & Password</p>
        <hr></hr>
        <input type='email' placeholder='Email'  className='login-email' />
        <input type='password' placeholder='password' className='login-password' />
        <button className='login-btn'>Login</button>
        <p className='login-last'>New User?<button className='login-signup' onClick={()=>{setlogin(!login)}}>Sign Up</button></p>
      </div>
      <div className='signup-container' style={{display : login?"none":""}}>
        <h1>Sign Up</h1>
        <p>Become user of <span> Aapki Dukan</span></p>
        <hr></hr>
        <input type='text' placeholder='Your Name'  className='user-name'/>
        <input type='email' placeholder='Email'  className='signup-email' />
        <input type='password' placeholder='password' className='signup-password' />
        <input type='password' placeholder='Confirm-password' className='signup-confirm-password' />
        <button className='signup-btn'>Sign Up</button>
        <p className='signup-last'>Allready have an account?<button className='signup-login' onClick={()=>{setlogin(!login)}}>Login</button></p>
      </div>
    </>
  );
}

export default Login