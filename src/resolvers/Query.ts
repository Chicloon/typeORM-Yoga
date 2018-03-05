import { getConnection } from "typeorm";
import { User } from "../entity/User";

export const Query = {
  hello: (_: any, { name }: any) => `hhello ${name || "World"}`,
  users: (_: any, args: any, context: any) => {
    console.log("context====", context);
    console.log("====args", args);
    return getConnection()
      .getRepository(User)
      .find();
  }
};
