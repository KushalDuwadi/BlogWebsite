import React from 'react'
import './BlockCard.css'
import { useNavigate } from 'react-router-dom';

const BlockCard = ({ blog }) => {
    const { title, description, category, image, _id, subTitle } = blog;
    const navigate = useNavigate();

    return  (
        <div className='blockcard-container'>
            <div className="blockcard-card" onClick={() => navigate(`/blog/${_id}`)}>
                <img src={image} alt={title} className='blockcard-image' />
                <span className='blockcard-category'>{category}</span>
                <div className="blockcard-content">
                    <h5 className='blockcard-title'>{title}</h5>
                    <p className='blockcard-description' dangerouslySetInnerHTML={{ __html: subTitle.slice(0,100)+ '....' }}></p>
                </div>
            </div>
        </div>
    )
}

export default BlockCard
