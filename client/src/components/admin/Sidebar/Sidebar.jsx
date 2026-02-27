import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { assets } from '../../../assets/assets'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink end to='/admin'>
        <img src={assets.home_icon} alt="Dashboard" />
        <p>Dashboard</p>
      </NavLink>

      <NavLink to='/admin/addBlog'>
        <img src={assets.add_icon} alt="Add Blog" />
        <p>Add Blog</p>
      </NavLink>

      <NavLink to='/admin/listBlog'> {/* make sure route matches in App.jsx */}
        <img src={assets.list_icon} alt="Blog List" />
        <p>Blog List</p>
      </NavLink>

      <NavLink to='/admin/comments'>
        <img src={assets.comment_icon} style={{ height: '20px' }} alt="Comments" />
        <p>Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
