import React, { useEffect, useState } from 'react'
import { blog_data } from '../../../assets/assets';
import BlogTableItem from '../../../components/admin/BlogTableItem/BlogTableItem';
import './ListBlog.css'

const ListBlog = () => {
  const [blogs, setBlogs]  = useState([]);
  const fetchBlogs = async ()=>{
    setBlogs(blog_data)

  }
  useEffect(()=>{
    fetchBlogs();
  },[])


    return (
    <div className="list-blog">
      <h2>Blog List</h2>
       <div className="list-blogs-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No recent blogs found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>

  )
}

export default ListBlog