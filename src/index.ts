import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection, getConnection } from "typeorm";
import resolvers from "./resolvers";

import { User } from "./entity/User";

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {};

async function getUser(req: any) {
  // try {
  // console.log(req);
  // console.log("==========headers", req.headers);
  const token = (await req.headers.auth) ? req.headers.auth : null;
  // console.log(req.headers);
  console.log(token);
  const user = await getConnection()
    .getRepository(User)
    .findOneById(token);
  console.log(user);
  // if (token != null) {
  //   user = await decodeToken(token);
  //   req.user = user;
  // } else {
  //   req.user = null;
  // }
  return user;
  // } catch (error) {
  //   throw error;
  // }
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: async req => ({
    user: await getUser(req.request)
    // request: req.request.headers
    // theContext: req
  })
});
createConnection().then(() => {
  server.start(() => console.log("Server is running on localhost:4000"));
});

// server.start(() => console.log("Server is running on localhost:4000"));
