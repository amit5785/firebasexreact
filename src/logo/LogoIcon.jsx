import React from 'react'
import './LogoIcon.css'
import Logo from './store-icon-flat-isolated-on-white-vector-20842001.jpg'


const LogoIcon= ()=>{
  return (
    <>
    <div className='container'>
    <div id='logocontainer'>
      <img id='logoicon' src={Logo} alt='Error' />
    </div>
    <div id='logotext'>
      <p>Aapki Dukan</p>
    </div>
    </div>
    </>
  );
}

export default LogoIcon