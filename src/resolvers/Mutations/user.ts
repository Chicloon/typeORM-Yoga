import { User } from "../../entity/User";
import { getConnection } from "typeorm";
import { ResolverMap } from "../../types/ResolverType";

import JWT_SECRET from "../../constants";

export const user: ResolverMap = {
  createUser: (_, args) => User.save(args)
};
