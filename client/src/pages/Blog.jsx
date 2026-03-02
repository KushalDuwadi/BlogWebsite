// // import React, { useEffect, useState } from 'react'
// // import {useParams } from 'react-router-dom';
// // import { assets, blog_data, comments_data } from '../assets/assets';
// // import { Navbar } from '../components/Navbar/Navbar';
// // import Moment from 'moment';
// // import './Blog.css'
// // import Loader from '../components/loader/Loader';
// // // import 'moment-timezone';

// //  const Blog = () => {
// //   const {id} = useParams();

// // const[data,setData] = useState(null);
// // const[comments,setComments] = useState([]);

// // const fetchData = async()=>{
// //   const response =  blog_data.find(item=>item._id===id);
// //   setData(response);
// // }
// // const fetchComments= async()=>{
// //   setComments(comments_data);
// // }
// // useEffect(()=>{
// //   fetchData();
// //   fetchComments();
// // },[id])

// //   return data? (
// //     <div>
// //     <Navbar/>
// //     <div className='blogContent'>
// //       <p className='blogDate'>Created On {Moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
// //       <h1 className='blogTitle'>{data.title}</h1>
// //       <h2 className='blogSub'dangerouslySetInnerHTML={{__html: data.subTitle}}></h2>
// //       <p className='blogAuthor'>{data.author}</p>
// //     </div>
// //     <div>
// //       <img className='blogImage' src={data.image} alt="" />
// //     </div>
// //     <div className='blogContent' dangerouslySetInnerHTML={{__html: data.description}}></div>


// //   {/* Comments displaying section..... */}


// //     <div className='comments'>
// //       <p>Comments: ({comments.length})</p>
// //       <div className='commentList'>
// //         {comments.slice(0,3).map((item,index)=>(
// //           <div className='comment-item' key={index}>
// //           <div>
// //             <img src={assets.user_icon} alt="" />
// //             <p>{item.name}</p>

// //           </div>
// //           <p>{item.content}</p>
// //           <div className='time'>
// //             <p>{Moment(item.createdAt).fromNow()}</p>
// //           </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>

   

// //     </div>
// //   ):
// //   <Loader/>
// // }
// // export default Blog;




// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { assets, blog_data, comments_data } from '../assets/assets';
// // import { Navbar } from '../components/Navbar/Navbar';
// // import Moment from 'moment';
// // import './Blog.css';
// // import Loader from '../components/loader/Loader';

// // const Blog = () => {
// //   const { id } = useParams();

// //   const [data, setData] = useState(null);
// //   const [comments, setComments] = useState([]);

// //   const fetchData = async () => {
// //     const response = blog_data.find(item => item._id === id);
// //     setData(response);
// //   };

// //   const fetchComments = async () => {
// //     setComments(comments_data);
// //   };

// //   useEffect(() => {
// //     fetchData();
// //     fetchComments();
// //   }, [id]);

// //   if (!data) return <Loader />;

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className='blogContent'>
// //         <p className='blogDate'>Created On {Moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
// //         <h1 className='blogTitle'>{data.title}</h1>
// //         <h2 className='blogSub' dangerouslySetInnerHTML={{ __html: data.subTitle }}></h2>
// //         <p className='blogAuthor'>{data.author || "Admin"}</p>
// //       </div>
// //       <div>
// //         <img className='blogImage' src={data.image} alt="" />
// //       </div>
// //       <div className='blogContent' dangerouslySetInnerHTML={{ __html: data.description }}></div>

// //       <div className='comments'>
// //         <p>Comments: ({comments.length})</p>
// //         <div className='commentList'>
// //           {comments.slice(0, 3).map((item, index) => (
// //             <div className='comment-item' key={index}>
// //               <div>
// //                 <img src={assets.user_icon} alt="" />
// //                 <p>{item.name}</p>
// //               </div>
// //               <p>{item.content}</p>
// //               <div className='time'>
// //                 <p>{Moment(item.createdAt).fromNow()}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Blog;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Navbar } from '../components/Navbar/Navbar';
// import Loader from '../components/loader/Loader';
// import Moment from 'moment';
// import { useAppContext } from '../context/AppContext';
// import './Blog.css';

// const Blog = () => {
//   const { id } = useParams();
//   const { axios } = useAppContext();
//   const [blog, setBlog] = useState(null);
//   const [comments, setComments] = useState([]);



// const fetchComments = async()=>{
//   setComments(comments_data)
// }




//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`/api/blog/${id}`); // fetch single blog from backend
//         if (res.data.success) {
//           setBlog(res.data.blog);
//         } else {
//           setBlog(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setBlog(null);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) return <Loader />;

//   return (
//     <div>
//       <Navbar />
//       <div className='blogContent'>
//         <p className='blogDate'>
//           Created On {Moment(blog.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//         <h1 className='blogTitle'>{blog.title}</h1>
//         <h2
//           className='blogSub'
//           dangerouslySetInnerHTML={{ __html: blog.subTitle }}
//         ></h2>
//         <p className='blogAuthor'>{blog.author || 'Admin'}</p>
//       </div>

//       <div>
//         <img className='blogImage' src={blog.image} alt={blog.title} />
//       </div>

//       <div
//         className='blogContent'
//         dangerouslySetInnerHTML={{ __html: blog.description }}
//       ></div>

//       {/* {comments section} */}

//       {/* <div className='comments'> */}

//       {/* </div> */}
//     </div>
//   );
// };

// export default Blog;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import Loader from "../components/loader/Loader";
import Moment from "moment";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import "./Blog.css";

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // ✅ fetch blog
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`/api/blog/${id}`);
      if (res.data.success) setBlog(res.data.blog);
      else setBlog(null);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ fetch comments
  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/blog/comments/${id}`);
      if (res.data.success) setComments(res.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ add comment
  const addComment = async (e) => {
    e.preventDefault();

    if (!name || !content) {
      return toast.error("Please fill all fields");
    }

    try {
      const res = await axios.post(`/api/blog/comments/${id}`, {
        name,
        content,
      });

      if (res.data.success) {
        toast.success("Comment added");
        setName("");
        setContent("");
        fetchComments();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to add comment");
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, [id]);

  if (!blog) return <Loader />;

  return (
    <div>
      <Navbar />

      <div className="blogContent">
        <p className="blogDate">
          Created On {Moment(blog.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>

        <h1 className="blogTitle">{blog.title}</h1>

        <h2
          className="blogSub"
          dangerouslySetInnerHTML={{ __html: blog.subTitle }}
        ></h2>

        <p className="blogAuthor">{blog.author || "Admin"}</p>
      </div>

      <img className="blogImage" src={blog.image} alt={blog.title} />

      <div
        className="blogContent"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></div>

      {/* ✅ COMMENTS SECTION */}

      <div className="comments">
        <h3>Comments ({comments.length})</h3>

        {/* Add Comment */}
        <form className="comment-form" onSubmit={addComment}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Write a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">Post Comment</button>
        </form>

        {/* Comment List */}
        <div className="commentList">
          {comments.map((item) => (
            <div key={item._id} className="comment-item">
              <div className="comment-header">
                <strong>{item.name}</strong>
                <span>{Moment(item.createdAt).fromNow()}</span>
              </div>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;