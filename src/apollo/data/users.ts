import gql from 'graphql-tag';

namespace Users {
  export const userFragment = gql`
    fragment user on viewer {
      username
      email
    }
  `;
  export const getViewer = gql`
    query viewer {
      viewer{
        ...user
      }
    }
    ${userFragment}
  `;
}
