import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets';
import { Navbar } from '../components/Navbar/Navbar';
import Moment from 'moment';
import './Blog.css'
import Loader from '../components/loader/Loader';
// import 'moment-timezone';

 const Blog = () => {
  const {id} = useParams();

const[data,setData] = useState(null);
const[comments,setComments] = useState([]);

const fetchData = async()=>{
  const response =  blog_data.find(item=>item._id===id);
  setData(response);
}
const fetchComments= async()=>{
  setComments(comments_data);
}
useEffect(()=>{
  fetchData();
  fetchComments();
},[id])

  return data? (
    <div>
    <Navbar/>
    <div className='blogContent'>
      <p className='blogDate'>Created On {Moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <h1 className='blogTitle'>{data.title}</h1>
      <h2 className='blogSub'dangerouslySetInnerHTML={{__html: data.subTitle}}></h2>
      <p className='blogAuthor'>{data.author}</p>
    </div>
    <div>
      <img className='blogImage' src={data.image} alt="" />
    </div>
    <div className='blogContent' dangerouslySetInnerHTML={{__html: data.description}}></div>


  {/* Comments displaying section..... */}


    <div className='comments'>
      <p>Comments: ({comments.length})</p>
      <div className='commentList'>
        {comments.slice(0,3).map((item,index)=>(
          <div className='comment-item' key={index}>
          <div>
            <img src={assets.user_icon} alt="" />
            <p>{item.name}</p>

          </div>
          <p>{item.content}</p>
          <div className='time'>
            <p>{Moment(item.createdAt).fromNow()}</p>
          </div>
          </div>
        ))}
      </div>
    </div>

   

    </div>
  ):
  <Loader/>
}
export default Blog;
