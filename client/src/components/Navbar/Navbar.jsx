import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img onClick={()=>{navigate('/')}} src={assets.logo}  alt="Logo" />
      <button onClick={()=>navigate('/admin')}>Admin Login
      <img className='arrow'  src={assets.arrow} alt="arrow" />
      </button>


    </div>
  )
}
