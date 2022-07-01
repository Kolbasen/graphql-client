import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT, GET_PRODUCTS } from '../queries';
import { orderBy } from '../constants';
import './Product.css';

export const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);

    const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
        refetchQueries: [
            { query: GET_PRODUCTS, variables: { orderBy } },
        ],
    });

    const handleProductCreate = () => {
        createProduct({
            variables: {
                product: { title, price: Number(price) },
            },
        });
    };

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className="center-container">
            <div>
                <div className="product-input">Title</div>
                <input className="product-input" name="Title" type="text" onChange={e => setTitle(e.target.value)} />
                <div className="product-input">Price</div>
                <input className="product-input" name="Price" type="number" onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="submit-product">
                <button type="button" onClick={handleProductCreate}>
                    Add product
                </button>
            </div>
        </div>
    );
};
