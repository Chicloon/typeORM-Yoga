import { ResolverMap } from "../../types/ResolverType";
import { Message } from "../../entity/Message";

export const messageQueries: ResolverMap = {
  messages: () => Message.find({ relations: ["user", "channel"] })
};
