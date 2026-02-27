import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../../assets/assets';
import './AddBlog.css';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddBlog = () => {

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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const content = quillRef.current.root.innerHTML;

    console.log({
      title,
      subTitle,
      category,
      isPublished,
      content
    });
  }

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
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
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

        <button className="submit-btn" type="submit">Add Blog</button>
      </div>

    </form>
  )
}

export default AddBlog;