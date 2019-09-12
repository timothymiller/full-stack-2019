import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    name: String!
  }
  
  type Query {
    subscribers: [User]
  }
`