import { ResolverMap } from "../../types/ResolverType";
import { Message } from "../../entity/Message";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";
import { Channel } from "../../entity/Channel";

export const messageResovlers: ResolverMap = {
  createMessage: async (parentValue, args, ctx) => {
    console.log(args);

    const message = Message.create({
      text: args.text,
      channelId: args.channelId,
      userId: args.channelId
    });

    // const user = await User.findOneById(args.userId);
    // const channel = await Channel.findOneById(args.channelId);

    // message.user = user;
    // message.channel = channel;
    await message.save();
    console.log(message);
    return message;
  }
};
