import React, { useCallback, useState } from 'react';
import { AddReview } from '../Reviews/AddReview';
import { ReviewList } from '../Reviews/ReviewList';
import './Product.css';

export const ProductItem = ({ product }) => {
    const [isAddingReview, setIsAddingReview] = useState(false);

    const handleReviewSubmit = useCallback(() => setIsAddingReview(false), []);

    return (
        <div className="item">
            <h1>{product.title}</h1>
            <h2>Price: {product.price} $</h2>
            <ReviewList reviews={product.reviews} />
            {
                isAddingReview ? (
                    <AddReview
                        productId={product.id}
                        onReviewSubmit={handleReviewSubmit}
                    />
                ) : (
                    <button
                        className="add-review"
                        type="button"
                        onClick={() => setIsAddingReview(true)}
                    >
                        Add review
                    </button>
                )
            }
        </div>
    );
};
