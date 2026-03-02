import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../../assets/assets';
import './AddBlog.css';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useAppContext } from '../../../context/AppContext';
import toast from 'react-hot-toast';

const AddBlog = () => {

  const {axios} = useAppContext();
  const[isAdding,setIsAdding] = useState(false)

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("StartUp");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    alert("AI content generation coming soon 🙂");
  }

  const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    setIsAdding(true);

    const blog = {
      title,
      subTitle,
      //  description: quillRef.current.root.innerHTML, //->It assumes quillRef.current is already initialized. If your user clicks submit before Quill is ready, quillRef.current is null, and your app will crash or the description will be empty.
      description: quillRef.current ? quillRef.current.root.innerHTML : "",//->This ensures description is at least "" if Quill isn’t ready.
     //-->//Once Quill is initialized, it will correctly store the content.
      category,
      isPublished,
    };

    const formData = new FormData();
    formData.append("blog", JSON.stringify(blog));
    formData.append("image", image);

    const { data } = await axios.post("/api/blog/add",formData,
      // { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (data.success) {
      toast.success(data.message);
      setImage(false);
      setTitle("");
      setSubTitle("");
      quillRef.current.root.innerHTML = "";
      setCategory("Startup");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    setIsAdding(false);
  }
};

// const content = quillRef.current ? quillRef.current.root.innerHTML : "";

    // console.log({
    //   title,
    //   subTitle,
    //   category,
    //   isPublished,
    //   content
    // });
  

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write your blog content here...',
      });
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="add-blog-form">

      <div className="form-group">
        <p className="formlabel">Upload Thumbnail</p>
        <label htmlFor="image" className="image-upload-box">
          <img
            className="preview-image"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="image"
          />
          <input
          id = "image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            
          />
        </label>

        <p className="form-label">Blog Title</p>
        <input
          className="text-input"
          type="text"
          placeholder="Type Here"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <p className="form-label">Sub Title</p>
        <input
          className="text-input"
          type="text"
          placeholder="Type Here"
          onChange={e => setSubTitle(e.target.value)}
          value={subTitle}
        />

        <p className="form-label">Blog Description</p>
        <div className="editor-container">
          <div ref={editorRef}></div>
          <button
            type="button"
            className="ai-btn"
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>
      </div>

      <div className="publish-section">
        <div>
          <p >Category</p>
          <select name="category" onChange={e => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {blogCategories.map((category, index) => (
              <option key={index} value={category}>
              {category}
              </option>
            ))}
          </select>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="publish"
            checked={isPublished}
            onChange={e => setIsPublished(e.target.checked)}
          />
          <label htmlFor="publish">Publish Now</label>
        </div>

        <button disabled= {isAdding} className="submit-btn" type="submit">{isAdding? 'Adding...': 'Add Blog'}</button>
      </div>

    </form>
  )

}

export default AddBlog;