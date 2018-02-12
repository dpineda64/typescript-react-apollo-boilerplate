import gql from 'graphql-tag';

export namespace Users {
  export const fragment = gql`
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
    ${fragment}
  `;
}
