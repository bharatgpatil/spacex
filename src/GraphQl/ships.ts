import { gql } from "@apollo/client";

export const GET_SHIP_LIST = gql`
    query getShips($limit: Int!, $offset: Int = 0) {
        ships(limit: $limit, offset: $offset) {
            home_port
            id
            image
            name
            roles
            type
            weight_kg
            year_built
        }
    }
`;
