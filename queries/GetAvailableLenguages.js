import { gql } from "@apollo/client";

const GET_AVAILABLE_LANGUAGES = gql`
  query GetAvailableLanguages {
    languages {
      code
      name
    }
  }
`;

export { GET_AVAILABLE_LANGUAGES as default };
