import { ResolverMap } from "../../types/ResolverType";
import { User } from "../../entity/User";

export const userQueries: ResolverMap = {
  users: (_, args, context) => {
    // console.log("context====", context);
    // console.log("====args", args);
    console.log("context is =====", context);
    return User.find();
    // return getConnection()
    //   .getRepository(User)
    //   .find();
  },
  me: (_, args, ctx) => User.findOneById(ctx.user.id)
};
