import React from 'react'
import './Layout.css'
import { useNavigate, Outlet } from 'react-router-dom'
import { assets } from '../../../assets/assets'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Header */}
      <div className='layout-header'>
        <img 
          src={assets.logo} 
          alt="Logo" 
          onClick={() => navigate('/admin')} 
          className='logo'
        />
        <button className='logout' onClick={logout}>Logout</button>
      </div>

      {/* Sidebar + Main Content */}
      <div className='layout-body'>
        <div className='container'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout;
