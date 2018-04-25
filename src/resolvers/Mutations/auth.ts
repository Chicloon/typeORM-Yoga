import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { ResolverMap } from "../../types/ResolverType";
import { User } from "../../entity/User";

const SALT = 12;
const JWT_SECRET = "aslkdfjaklsjdflk";

export const authResolvers: ResolverMap = {
  signup: async (parent, args, ctx) => {
    const password = await bcrypt.hash(args.password, SALT);
    const user = User.create({
      ...args,
      password
    });
    await user.save();

    ctx.session.userId = user.id;

    return user;
  }

  // async login(parent, { email, password }, ctx: Context, info) {
  //   const user = await ctx.db.query.user({ where: { email } });
  //   if (!user) {
  //     throw new Error(`No such user found for email: ${email}`);
  //   }

  //   const valid = await bcrypt.compare(password, user.password);
  //   if (!valid) {
  //     throw new Error("Invalid password");
  //   }

  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  //     user
  //   };
  // }
};
