import React from 'react'
import LogoIcon from '../logo/LogoIcon';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login'
import './Landing.css'
const Landing=() =>{
  return (
  <>
    <div className='landing-container'>
    <Navbar />
    <Login />
    <LogoIcon />
    </div>
  </> );
}

export default Landing