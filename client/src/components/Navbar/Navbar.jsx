import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

export const Navbar = () => {
    // const navigate = useNavigate();
    const {navigate,token}   = useAppContext();
  return (
    <div className='navbar'>
      <img onClick={()=>{navigate('/')}} src={assets.logo}  alt="Logo" />
      <button onClick={()=>navigate('/admin')}>{token ? 'Dashboard':'Login'}
      <img className='arrow'  src={assets.arrow} alt="arrow" />
      </button>


    </div>
  )
}
