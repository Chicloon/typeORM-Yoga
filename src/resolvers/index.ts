import { Query } from "./Query";
import { user } from "./Mutations/user";
import { channelResolvers } from "./Mutations/channel";
import { userFiels } from "./Types/user";
import { userQueries } from "./Queries/user";
import { channelQueries } from "./Queries/channel";

export default {
  User: {
    ...userFiels
  },
  Query: {
    ...userQueries,
    ...channelQueries,
    ...Query
  },
  Mutation: {
    ...user,
    ...channelResolvers
  }
};
