import React, { useEffect, useState } from 'react'
import { comments_data } from '../../../assets/assets';
import CommentTableItem from '../../../components/admin/CommentTableData/CommentTableItem';
import './Comments.css'

const Comments = () => {

  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not approved');

  const fetchComments = async () => {
    setComments(comments_data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className='comments-container'>

      {/* Header */}
      <div className='comments-header'>
        <h1>Comments</h1>

        <div className='filter-buttons'>
          <button
            onClick={() => setFilter('Approved')}
            className={`filter-btn ${filter === 'Approved' ? 'active' : ''}`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter('Not approved')}
            className={`filter-btn ${filter === 'Not approved' ? 'active' : ''}`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='comments-table-container'>
        <table>
          <thead>
            <tr>
              <th>Blog Title & Comment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter((comment) => {
                if (filter === 'Approved') {
                  return comment.isApproved === true
                }
                else if (filter === 'Not approved') {
                  return comment.isApproved === false
                }
              })
              .map((comment) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Comments;