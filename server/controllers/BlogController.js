// import ImageKit from '@imagekit/nodejs';
import { Folders } from '@imagekit/nodejs/resources/index.mjs';
import fs from 'fs';
import Blog from '../models/Blog';


export const addBlog  =async(req,res)=>{


    try{
        const{title,subTitle,description, category, isPublished} = JSON.parse(req.body.blog)
     const imageFile = req.file;

     // check if all fields are present...

     if(!title || !description || !category || !imageFile){
        return res.json({success:false, messege:"All fields are required"})
     }



        // upload image to imagekit
        const fileBuffer = fs.readFile(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })





        //optimization through imagekit URL transformation

        const optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation:[
                {
                    // height:300,
                    width:1280 // width resizing for better performance
                },
                {
                        quality:"auto"//auto compression
                },
                {
                    format:"webp"//convert to modern format
                }
            ]
        })




        

        const image = optimizedImageURL;

        await Blog.create({
            title, subTitle, description, category, image, isPublished
        })
        res.json({success:true, messege:"Blog added successfully"})

    }




    catch(error){
        return res.json({success:false, messege:"Error adding blog", error:error.message})
    }
}