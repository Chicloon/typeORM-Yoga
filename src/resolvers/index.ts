import { Query } from "./Query";
import { user } from "./Mutation/user";

export default {
  Query,
  Mutation: {
    ...user
  }
};
