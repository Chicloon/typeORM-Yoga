import { getConnection } from "typeorm";
import { User } from "../entity/User";

export const Query = {
  hello: (_: any, { name }: any) => `hhello ${name || "World"}`,
  users: () => {
    return getConnection()
      .getRepository(User)
      .find();
  }
};
