import React from 'react';
import './DisplayReview.css'

const DisplayReview = props => {
    const { name, username, comment, picture, ratings } = props.review;
    return (
        <div className='display-content'>
            <div className='title-content'>
                <img src={picture} alt="" />
                <h3>Name: {name}</h3>
            </div>
            <div className='details-content'>
                <p><small>Username: {username}</small></p>
                <p>User Feedback: {comment}</p>
                <p>Ratings: <span style={{ color: "orange", fontWeight: "700", fontSize: "18px" }}>{ratings}</span> star</p>
            </div>
        </div>
    );
};

export default DisplayReview;