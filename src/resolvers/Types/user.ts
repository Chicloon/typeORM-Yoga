import { ResolverMap } from "../../types/ResolverType";
import { Channel } from "../../entity/Channel";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";

export const userType: ResolverMap = {
  channels: (_, args, ctx) => {
    return getConnection()
      .createQueryBuilder()
      .relation(User, "channels")
      .of(_.id)
      .loadMany();
  }
};
