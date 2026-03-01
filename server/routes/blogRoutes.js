import express from 'express';
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/BlogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'), auth, addBlog);
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,deleteBlogById) // auth middleware added to protect the delete route so that only admin can delete it
blogRouter.post('/toggle-publish',auth,togglePublish) // auth middleware added to protect the toggle publish route so that only admin can toggle it
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComments)




export default blogRouter;