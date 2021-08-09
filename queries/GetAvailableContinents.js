import { gql } from "@apollo/client";

const GET_AVAILABLE_CONTINENTS = gql`
  query GetAvailableContinents {
    continents {
      name
      code
    }
  }
`;

export { GET_AVAILABLE_CONTINENTS as default };
