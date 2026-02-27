import React, { useState } from 'react';
import { motion } from "framer-motion";
import './BlogList.css';
// import {BlockCard} from '../BlogCard.jsx';
import { blog_data, blogCategories } from '../../assets/assets';
import BlockCard from '../BlogCard/BlockCard'

 const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className='container'>
      <div className='blogFilter'>
{blogCategories.map((item) => (
  <button 
    key={item} 
    onClick={() => setMenu(item)} 
    className={`btn ${menu === item ? 'active' : ''}`}  // add active class
  >
    {menu === item && (
      <div
        layoutId="activeBackground"
        className="active-background"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    )}
    <span className="btn-text">{item}</span>
  </button>
))}

      </div>
      <div>
        {blog_data.filter((blog)=>menu==='All'? true: blog.category===menu).map((blog) => (
          <BlockCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
    
  );
};
export default BlogList;


