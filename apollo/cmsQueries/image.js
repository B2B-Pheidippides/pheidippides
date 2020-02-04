import gql from "graphql-tag";

const IMAGES_QUERY = gql`  
  query Images {
    images(where: {name : "b2b-cartoon-map"}) {
      id
      name
      image {
        url
      }
    }
  }
`;

export default IMAGES_QUERY;  