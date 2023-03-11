import { RouteOptions } from "fastify";
import { userSignup } from "../../business-logic/users/signup";
import { User } from "../../types";

export const userSignupRoute: RouteOptions = {
  method: "POST",
  url: "/user-signup",
  handler: async (request, reply) => {
    const { body } = request;
    const user = body as User;
    try {
      const admin = await userSignup(user);
      reply.status(200).send(admin);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
