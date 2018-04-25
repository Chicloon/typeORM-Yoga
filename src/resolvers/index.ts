import { Query } from "./Query";
import { user } from "./Mutations/user";
import { channelResolvers } from "./Mutations/channel";
import { authResolvers } from "./Mutations/auth";
import { userType } from "./Types/user";
import { userQueries } from "./Queries/user";
import { channelQueries } from "./Queries/channel";
import { messageResovlers } from "./Mutations/message";
import { messageQueries } from "./Queries/message";
import { messageType } from "./Types/message";

export default {
  Message: {
    ...messageType
  },
  User: {
    ...userType
  },
  Query: {
    ...userQueries,
    ...channelQueries,
    ...messageQueries,
    ...Query
  },
  Mutation: {
    ...user,
    ...messageResovlers,
    ...channelResolvers,
    ...authResolvers
  }
};
