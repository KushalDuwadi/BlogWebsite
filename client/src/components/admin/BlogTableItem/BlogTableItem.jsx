import React from 'react'
import { assets } from '../../../assets/assets';
import './BlogTableItem.css'

const BlogTableItem = ({blog,fetchBlogs,index}) => {

    const{title,createdAt} = blog;
    const BlogDate = new Date(createdAt)
  return (
    <tr>
        <th>{index}</th>
        <td>{title}</td>
        <td>{BlogDate.toLocaleDateString()}</td>
        <td><p className = {`${blog.isPublished ? "text-green" : "text-orange"}`}>{blog.isPublished ? 'Published':'Unpublished'}</p></td>
       <td>
  <button
    className={`publish-btn ${blog.isPublished ? "published" : "unpublished"}`}
  >
    {blog.isPublished ? 'Unpublish' : 'Publish'}
  </button>

  <img
    src={assets.cross_icon}
    alt="delete"
    className="delete-icon"
  />
</td>
    </tr>
  )
}

export default BlogTableItem