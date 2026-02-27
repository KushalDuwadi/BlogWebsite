import React from 'react'
import { assets } from '../../../assets/assets';
import './CommentTableItem.css'

const CommentTableItem = ({ comment, fetchComments }) => {

  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="comment-row">

      <td className="comment-details">
        <b>Blog:</b> {blog.title}
        <br /><br />
        <b>Name:</b> {comment.name}
        <br />
        <b>Comment:</b> {comment.content}
      </td>

      <td className="comment-date">
        {BlogDate.toLocaleDateString()}
      </td>

      <td className="comment-actions">
        <div className="action-wrapper">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              alt="Approve"
              className="action-icon approve"
            />
          ) : (
            <p className="approved">Approved</p>
          )}

          <img
            src={assets.bin_icon}
            alt="Delete"
            className="action-icon delete"
          />
        </div>
      </td>

    </tr>
  )
}

export default CommentTableItem;