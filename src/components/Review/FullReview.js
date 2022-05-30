import React from 'react';
import useReview from '../../hooks/useReview';
import DisplayReview from '../DisplayReview/DisplayReview';
import './FullReview.css'

const FullReview = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='full-review'>
            {
                reviews.map(review => <DisplayReview
                    key={review.id}
                    review={review}></DisplayReview>)
            }
        </div>
    );
};

export default FullReview;