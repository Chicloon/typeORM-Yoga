import { ResolverMap } from "../../types/ResolverType";
import { Channel } from "../../entity/Channel";
import { User } from "../../entity/User";
import { getConnection, getRepository, getManager } from "typeorm";

import { Category } from "../../entity/Category";
import { Question } from "../../entity/Question";
// import { Question } from "../../entity/Question";

// const connection = getConnection();
// console.log(connection);

// const manager = getConnection().manager;

export const channel: ResolverMap = {
  async createChannel(_, args) {
    const user = await User.findOneById(1);
    console.log(user);
    const newChannel = await Channel.create({ name: args.name });

    console.log(newChannel.users);
    console.log(newChannel);
    return newChannel.save();
  },
  async test() {
    // const category1 = new Category();
    // category1.name = "books";
    // await getConnection().manager.save(category1);
    // const result = await getConnection().manager.save(category1);
    // console.log(result);

    // const category2 = new Category();
    // category2.name = "zoo";
    // await connection.manager.save(category2);

    // const question = getConnection().manager.create(Question, {
    //   title: "title",
    //   text: "text"
    // });
    // question.categories = [category1];
    // await getConnection().manager.save(question);

    const category = await Category.findOneById(9);
    const category2 = category.name;

    console.log("found category", category);

    // const question = await Question.findOneById(3);

    // const question = await getRepository(Question)
    //   .createQueryBuilder("question")
    //   .leftJoinAndSelect("question.categories", "category")
    //   .where("question.id = :id", { id: 3 })
    //   .delete();
    // .execute();

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Question)
      .where("id = :id", { id: 4 })
      .execute();

    console.log("found question", question);

    // question.title = "The new Title!!!";

    // question.categories.push(category);
    // console.log("question before save", question);
    // question.save();

    const allQuestions = await getConnection()
      .getRepository(Question)
      .createQueryBuilder("question")
      .leftJoinAndSelect("question.categories", "category")
      .getMany();

    console.log("allQuestions", allQuestions[allQuestions.length - 1]);

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
