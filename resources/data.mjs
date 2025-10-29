import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Database {
    id: ID!
    name: String!
    calories: Int!
    protein: Float
    carbs: Float
    fat: Float
  }

  type Query {
    getAll: [Database]
    getById(id: ID!): Database
    getBetweenCalories(min: Int!, max: Int!): [Database]
  }

  type Mutation {
    createDatabase(
      name: String!
      calories: Int!
      protein: Float
      carbs: Float
      fat: Float
    ): Database

    updateDatabase(
      id: ID!
      name: String
      calories: Int
      protein: Float
      carbs: Float
      fat: Float
    ): Database

    deleteDatabase(id: ID!): String
  }
`;

export default typeDefs;
