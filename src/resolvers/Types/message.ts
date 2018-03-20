import { ResolverMap } from "../../types/ResolverType";
import { Channel } from "../../entity/Channel";
import { getConnection, getRepository } from "typeorm";
import { User } from "../../entity/User";
import { Message } from "../../entity/Message";

export const messageType: ResolverMap = {
  channel: async (parent, args, ctx) => {
    console.log("===== partent id", parent.id);

    const channel = await getConnection()
      .createQueryBuilder()
      .relation(Message, "channel")
      .of(parent.id)
      .loadMany();

    console.log("==== message channel", channel);
    return channel;
  },
  user: (parent, args, ctx) => {
    return getConnection()
      .createQueryBuilder()
      .relation(Message, "user")
      .of(parent.id)
      .loadOne();
  }
};
