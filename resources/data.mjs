import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Database {
    id: ID!
    name: String!
    calories: Int!
    isVegetarian: Boolean
    value: Float
    coments: Float
    --v:Int
  }

  type Query {
    getAll: [Database]
    getById(id: ID!): Database
    getBetweenCalories(min: Int!, max: Int!): [Database]
  }

  type Mutation {
    createDatabase(
        id: ID!
        name: String!
        calories: Int!
        isVegetarian: Boolean
        value: Float
        coments: Float
        --v:Int
    ): Database

    updateDatabase(
        id: ID!
        name: String!
        calories: Int!
        isVegetarian: Boolean
        value: Float
        coments: Float
        --v:Int
    ): Database

    deleteDatabase(id: ID!): String
  }
`;

export default typeDefs;
