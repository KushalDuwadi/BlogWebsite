import React from 'react'
import { assets } from '../../../assets/assets';
import './BlogTableItem.css'
import { useAppContext } from '../../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({blog,fetchBlogs,index}) => {

    const{title,createdAt} = blog;
    const BlogDate = new Date(createdAt)
    const {axios}  = useAppContext();

  const deleteBlog = async()=>{
    const confirmed = window.confirm("Are you sure?")
    if(!confirmed)return;
    try{
      const {data} = await axios.post('/api/blog/delete',{id: blog._id})
      if(data.success){
        toast.success(data.message)
         await fetchBlogs();
      }
      else{
        toast.error(data.message)
      }
}catch(error){
  toast.error(error.response?.data?.message || error.message)
}
  }
const togglePublish = async()=>{
  try{
    const {data}= await axios.post('/api/blog/toggle-publish',{id:blog._id})
    if(data.success){
      toast.success(data.message)
      await fetchBlogs();
    } else{
      toast.error(data.message)
    }
  }catch(error){
    toast.error(error.message)
  }
}

  return (
    <tr>
        <th>{index}</th>
        <td>{title}</td>
        <td>{BlogDate.toLocaleDateString()}</td>
        <td><p className = {`${blog.isPublished ? "text-green" : "text-orange"}`}>{blog.isPublished ? 'Published':'Unpublished'}</p></td>
       <td>
  <button onClick={togglePublish}
    className={`publish-btn ${blog.isPublished ? "published" : "unpublished"}`}
  >
    {blog.isPublished ? 'Unpublish' : 'Publish'}
  </button>

  <img 
    src={assets.cross_icon}
    alt="delete"
    className="delete-icon"
    onClick={deleteBlog}
  />
</td>
    </tr>
  )
}

export default BlogTableItem