import { gql } from "@apollo/client";

export const getShipsList = gql`
    query getShips {
        ships {
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
