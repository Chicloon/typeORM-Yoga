import { Query } from "./Query";
import { user } from "./Mutation/user";
import { channelResolvers } from "./Mutation/channel";

export default {
  Query,
  Mutation: {
    ...user,
    ...channelResolvers
  }
};
