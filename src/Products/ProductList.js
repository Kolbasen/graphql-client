import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS, NEW_PRODUCT } from '../queries';
import { ProductItem } from './ProductItem';
import { orderBy } from '../constants';
import './Product.css';

export const ProductList = () => {
    const { loading, error, data, subscribeToMore } = useQuery(GET_PRODUCTS, {
        variables: { orderBy },
    });

    useEffect(() => {
        subscribeToMore({
            document: NEW_PRODUCT,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) {
                    return prev;
                }

                const { newProduct } = subscriptionData.data;
                return {
                    ...prev,
                    products: {
                        ...prev.products,
                        productList: [...prev.products.productList, { ...newProduct, reviews: [] }],
                    },
                };
            },
        });
    }, [subscribeToMore]);

    if (loading) {
        return <div>Is Loading...</div>;
    }

    if (error) {
        return <div>Ooops, error...</div>;
    }

    return (
        <div className="container">
            {
                data.products.productList.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    );
};
