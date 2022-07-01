import { gql } from '@apollo/client';

export const typeDefs = gql`
    enum Sort {
        asc
        desc
    }

    input ProductOrderByInput {
        title: Sort
        id: Sort
    }
    
    input ProductInput {
        title: String!
        price: Float!
    }   

    input ReviewInput {
        text: String!
        productId: Int!
    }
`;
