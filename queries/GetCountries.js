import { gql } from "@apollo/client";

const GET_SIMPLE_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
      continent {
        name
        code
      }
      currency
      languages {
        name
        code
      }
      native
      phone
      capital
    }
  }
`;

export { GET_SIMPLE_COUNTRIES as default };
