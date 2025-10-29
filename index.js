import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import typeDefs from "./resources/data.mjs";
import resolvers from "./resolvers/resolver.mjs";
import { conectarBaseDeDatos } from "./resources/db.mjs";

export { typeDefs, resolvers };

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  await conectarBaseDeDatos();

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor GraphQL corriendo en http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
