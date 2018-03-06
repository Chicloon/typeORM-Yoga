// import { getConnection } from "typeorm";
import { User } from "../entity/User";
import { ResolverMap } from "../types/ResolverType";

export const Query: ResolverMap = {
  hello: (_, { name }) => `hhello ${name || "World"}`,
  users: (_, args, context) => {
    console.log("context====", context);
    console.log("====args", args);
    return User.find();
    // return getConnection()
    //   .getRepository(User)
    //   .find();
  }
};
