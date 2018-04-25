import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection, getConnection, getRepository } from "typeorm";
import resolvers from "./resolvers";
import { User } from "./entity/User";
import constants from "./constants";
import * as jwt from "jsonwebtoken";
import * as session from "express-session";

const SESSION_SECRET = "this is a secret";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: async req => ({
    session: req.request.session
  })
});

server.express.use(
  session({
    name: "qid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  })
);

const cors = {
  credentials: true,
  origin: "http://localhost:3000"
};

createConnection().then(() => {
  server.start({ cors }, () =>
    console.log("Server is running on localhost:4000")
  );
});

// server.start(() => console.log("Server is running on localhost:4000"));
