import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from '../models/Comment.js'

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check credentials against environment variables
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" }); // fixed typo "messege"
    }

    // Generate JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({
      success: true,
      token,
      message: "Admin logged in successfully", // fixed typo "messege"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message, // fixed typo "messege"
    });
  }
};

//get all Blogs by admin

export const getAllBlogsAdmin= async(req,res)=>{
  try{
    const blogs = await Blog.find({}).sort({createdAt:-1})
    res.json({success:true,blogs})
  }catch(error){
    res.json({success:false,message:error.message})
  }
}
//get all comments by admin (admin can see all the comments)

export const getAllComments= async(req,res)=>{
  try{
    const comments = await Comment.find({}).populate("blog").sort({createdAt:-1})
    res.json({success:true,comments})
  }catch(error){
    res.json({success:false,message:error.message})
  }
}

//show data in admin dashboard

export const getDashboard  = async(req,res)=>{
  try{

    const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5)
    const blogs = await Blog.countDocuments();//give total number of blogs
    const comments = await Comment.countDocuments();
    const drafts  = await Blog.countDocuments({isPublished:false})

    const dashboardData  ={
      blogs, comments, drafts, recentBlogs
    }
    res.json({success:true,dashboardData})
  
  
  }catch(error)
  {
        res.json({success:false,message:error.message})
  }
}

//admin can delete blog comment based on blog id


export const deleteCommentById = async(req,res)=>{
  try {
    const{id}= req.body;
    await Comment.findByIdAndDelete(id);
    res.json({success:true, message:"comment delete successfully"})
    
  } catch (error) {
     res.json({success:false,message:error.message})
  }
}


//approved comment by admin

export const approveCommentById = async(req,res)=>{
  try {
    const{id}= req.body;
    await Comment.findByIdAndUpdate(id, {isApproved:true});//intially all new comments are false 
    res.json({success:true, message:"comment approved successfully"})
    
  } catch (error) {
     res.json({success:false,message:error.message})
  }
}
