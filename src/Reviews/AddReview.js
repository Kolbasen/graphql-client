import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW, GET_PRODUCTS } from '../queries';
import { orderBy } from '../constants';
import './Review.css';

const updateProductsStore = (productId) => (cache, { data: { createReview } }) => {
    const { products } = cache.readQuery({
        query: GET_PRODUCTS,
        variables: { orderBy },
    });

    const updatedProducts = products.productList.map(item => {
        if (item.id === productId) {
            return {
                ...item,
                reviews: [...item.reviews, createReview],
            };
        }

        return item;
    });

    cache.writeQuery({
        query: GET_PRODUCTS,
        variables: { orderBy },
        data: { products: { ...products, productList: updatedProducts } },
    });
};

export const AddReview = ({ productId, onReviewSubmit }) => {
    const [text, setText] = useState('');

    const [createProduct, { loading, error }] = useMutation(CREATE_REVIEW, {
        update: updateProductsStore(productId),
    });

    const handleReviewCreate = () => {
        createProduct({
            variables: {
                review: { text, productId },
            },
        });
        onReviewSubmit();
    };

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className="add-review">
            <div className="add-review">
                <div>Type text</div>
                <input className="add-review" name="Text" type="text" onChange={e => setText(e.target.value)} />
            </div>
            <div className="add-review">
                <button className="review-button" type="button" onClick={handleReviewCreate}>
                    Submit review
                </button>
                <button className="review-button" type="button" onClick={onReviewSubmit}>
                    Close
                </button>
            </div>
        </div>
    );
};
