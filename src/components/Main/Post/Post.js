import React from 'react';
import './Post.css';

const Post = ({ title, text, tags, autor, img, img_2x, date, views }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <img src={img} srcSet={`${img_2x} 2x`} alt={title} />
            <span className="tags">{tags}</span>
            <p>{text}</p>
            <div className="post-details">
                <span className="autor"><strong>{autor}</strong></span>
                <span className="date">{date}</span>
                <span className="views">{views} Views</span>
            </div>
        </div>
    );
};

export default Post;
