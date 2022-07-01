import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProducts($orderBy: ProductOrderByInput!) {
        products(orderBy: $orderBy) {
            productList {
                id
                title
                price
                reviews {
                  id
                  text
                }
            }
            count
        }
    }
`;

export const CREATE_PRODUCT = gql`
    mutation createProduct($product: ProductInput!) {
        createProduct(product: $product) {
            id
            title
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview($review: ReviewInput!) {
        createReview(review: $review) {
            id
            text
        }
    }
`;

export const NEW_PRODUCT = gql`
    subscription newProduct {
        newProduct {
            id
            price
            title
        }
    }
`;
