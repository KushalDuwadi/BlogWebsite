import React, { useState } from 'react';
import { motion } from "framer-motion";
import './BlogList.css';
// import {BlockCard} from '../BlogCard.jsx';
import { blog_data, blogCategories } from '../../assets/assets';
import BlockCard from '../BlogCard/BlockCard'
import { useAppContext } from '../../context/AppContext';

 const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const {blogs,input} = useAppContext();


  const filteredBlogs = ()=>{
    if(input === ''){
      return blogs;
    }
   return blogs.filter(blog =>
    blog.title.toLowerCase().includes(input.toLowerCase()) ||
    blog.category.toLowerCase().includes(input.toLowerCase())
  );
  }

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
        // layoutid="activeBackground"
        className="active-background"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    )}
    <span className="btn-text">{item}</span>
  </button>
))}

      </div>
      <div>
        {filteredBlogs().filter((blog)=>menu==='All'? true: blog.category===menu).map((blog) => (
          <BlockCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
    
  );
};
export default BlogList;


