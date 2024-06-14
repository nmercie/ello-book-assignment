import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Book {
    title: String!
    author: String!
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books: [Book]
  }
`;
