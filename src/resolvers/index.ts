import { Query } from "./Query";
import { user } from "./Mutation/user";
import { channel } from "./Mutation/channel";

export default {
  Query,
  Mutation: {
    ...user,
    ...channel
  }
};
