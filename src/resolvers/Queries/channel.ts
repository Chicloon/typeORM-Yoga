import { ResolverMap } from "../../types/ResolverType";
import { Channel } from "../../entity/Channel";

export const channelQueries: ResolverMap = {
  channels: () => Channel.find()
};
