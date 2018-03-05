import { User } from "../../entity/User";
import { getConnection } from "typeorm";

export const user = {
  createUser(_: any, args: any) {
    // const newUser = manager.create(User, args);

    // manager.save(newUser);
    console.log(args);
    const newUser = getConnection()
      .getRepository(User)
      .save(args);

    console.log(newUser);
    return newUser;
  }
};
