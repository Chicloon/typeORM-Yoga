import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import resolvers from "./resolvers";
// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
createConnection().then(() => {
  server.start(() => console.log("Server is running on localhost:4000"));
});

// server.start(() => console.log("Server is running on localhost:4000"));
