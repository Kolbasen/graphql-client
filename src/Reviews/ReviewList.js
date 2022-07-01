import React from 'react';

export const ReviewList = ({ reviews }) => (
    <div>
        {
            reviews.map(review => (
                <div key={review.id}>{review.text}</div>
            ))
        }
    </div>
);
