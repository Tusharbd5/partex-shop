import React from 'react';
import useReview from '../../hooks/useReview';
import DisplayReview from '../DisplayReview/DisplayReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview();
    console.log(reviews);
    return (
        <div>
            <h1>Total Customer Review: {reviews.length}</h1>
            <div className='review-container'>
                {
                    reviews.slice(0, 3).map(review => <DisplayReview
                        key={review.id}
                        review={review}></DisplayReview>)
                }
            </div>
            <button>Show All Reviews</button>
        </div>
    );
};

export default Review;