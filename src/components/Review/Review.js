import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import DisplayReview from '../DisplayReview/DisplayReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div style={{ marginBottom: "30px" }}>
            <h1>Total Customer Review: {reviews.length}</h1>
            <div className='review-container'>
                {
                    reviews.slice(0, 3).map(review => <DisplayReview
                        key={review.id}
                        review={review}></DisplayReview>)
                }
            </div>
            <Link to="/reviews">
                <button className='review-btn'>Show All Reviews</button>
            </Link>
        </div>
    );
};

export default Review;