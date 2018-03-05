import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection, getConnection } from "typeorm";
import resolvers from "./resolvers";
import { User } from "./entity/User";
import constants from "./constants";
import * as jwt from "jsonwebtoken";

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {};

export function decodeToken(token: String) {
  const arr = token.split(" ");
  let user;
  if (arr[0] === "Bearer") {
    try {
      user = jwt.verify(arr[1], constants.JWT_SECRET);
      // return user;
    } catch (error) {
      throw new Error("Token not valid!");
    }
    // return jwt.verify(arr[1], constants.JWT_SECRET);
  }
  return user;
}

async function getUser(req: any) {
  // try {
  // console.log(req);
  // console.log("==========headers", req.headers);
  const token = (await req.headers.auth) ? req.headers.auth : undefined;
  if (token) {
    const decoded = await decodeToken(token);
    console.log(decoded);
  }
  // console.log(req.headers);
  // console.log(token);
  const user = await getConnection()
    .getRepository(User)
    .findOneById(1);
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
