import { ResolverMap } from "../../types/ResolverType";
import { Channel } from "../../entity/Channel";
import { User } from "../../entity/User";
import { getConnection, getRepository, getManager } from "typeorm";

import { Category } from "../../entity/Category";
import { Question } from "../../entity/Question";
import { ChannelMember } from "../../entity/ChannelMember";
// import { Question } from "../../entity/Question";

// const connection = getConnection();
// console.log(connection);

// const manager = getConnection().manager;

export const channelResolvers: ResolverMap = {
  async createChannel(_, args) {
    const user = await User.findOneById(1);
    console.log(user);
    const newChannel = await Channel.create({ name: args.name });

    console.log(newChannel.users);
    console.log(newChannel);
    return newChannel.save();
  },
  async test() {
    // const channel = await getRepository(Channel)
    //   .createQueryBuilder("channel")
    //   .leftJoinAndSelect("channel.users", "user")
    //   .where("user.id = :cid", { cid: 13 })
    //   .andWhere("channel.id = :id", { id: 7 })
    //   .getOne();

    // console.log("found channel", channel);

    const user = await User.findOneById(13);

    console.log("found user", user);

    // const channel = await getConnection()
    //   .createQueryBuilder()
    //   .relation(Channel, "users")
    //   .of(7)
    //   .add(12);

    const member = await ChannelMember.findOne({
      where: { channelId: 7, userId: 12 }
    });
    console.log("found member", member);

    member.role = "admin";
    member.save();

    const channelMembers = await ChannelMember.find({
      where: { channelId: 7 }
    });

    console.log(channelMembers);

    return true;
  }
  // async createChannelMember(_, { userId, channelId }) {
  //   const member = { role: "user", channelId: args.channel, userId: args.user };

  //   const user = await User.findOneById(userId);

  //   console.log(member);
  //   const channelMember = await new ChannelMember();
  //   channelMember.role = "the role";
  //   channelMember.user = user;
  //   channelMember.save();

  //   return channelMember;
  // }
};
