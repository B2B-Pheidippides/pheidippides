import gql from "graphql-tag";

const EVENT_QUERY = gql`  
  query Events {
    events(where: {name : "b2b-start"}) {
      id
      name
      description
      dtg
    }
  }
`;

export default EVENT_QUERY;  