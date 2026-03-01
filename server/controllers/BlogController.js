import fs from "fs";
import Blog from "../models/Blog.js";
import imagekit from "../configs/imagekit.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Read image file
    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimize image URL
    const optimizedImageURL = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: 1280 },//width resizing
        { quality: "auto" },//auto compression
        { format: "webp" },//convert to modern format
      ],
    });


    const image = optimizedImageURL;
    // Save blog to DB
      await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.status(201).json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding blog", error: error.message });
  }
};




// get all the blogs from the database

export const getAllBlogs = async(req,res)=>{
  try{
    const blogs = await Blog.find({isPublished:true})
    res.json({success:true,blogs})
  }
  catch(error){
    req.json({success:false,message:"Error fetching blogs",error:error.message})
  }
}

//get blog details by id

export const getBlogById= async(req,res)=>{
  try{
    const {id} = req.params;
    const blog  =await Blog.findById(id);
    if(!blog){
      return res.json({success:false,message:"Blog not found"})
    }
    res.json({success:true,blog})
  }
  catch(error){
        res.json({success:false,message:"Error fetching blog details",error:error.message})
  }
}

//delete blog by id

export const deleteBlogById= async(req,res)=>{
  try{
    const {id} = req.body;
    await Blog.findByIdAndDelete(id);

 
    await Comment.deleteMany({blog:id})   //delete all comments associated with that blogs

    res.json({success:true, message:"Blog deleted successfully"})
  }
  catch(error){
        res.json({success:false,message:"Error deleting blog ",error:error.message})
  }
}

//toggle blog publish ststus

export const togglePublish = async(req,res)=>{
  try{
    // const{blogid} = req.body;
      // const{blogId} = req.body;  //here id is used because id is passed in frontend   {"id" : "69a2a95b3065554c90fbb1f3" }
      const{id} = req.body;
      const blog = await Blog.findById(id);
    // const blog = await Blog.findById(blogId);
    // const blog = await Blog.findById(blogid);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({success:true,message:"Blog publish status toggled successfully"})
  }
  catch(error)
  {

          res.json({success:false,message: error.message})


    }
}
 // comment section

export const addComment = async(req,res)=>{
  try{
    const {blog,name,content} = req.body;
    await  Comment.create({blog,name,content});
        res.json({success:true,message:"Comment added for review"})
  }
  catch(error){
        res.json({success:false,message: error.message})
  }
}


export const getBlogComments = async (req,res)=>{
  try{
      const{id} = req.body;
      const comments = await Comment.find({blog:id,isApproved:true}).sort({createdAt:-1});
      res.json({success:true,comments})
  }
  catch(error){
          res.json({success:false,message: error.message})
  }
}