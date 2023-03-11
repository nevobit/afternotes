import { RouteOptions } from "fastify";
import { userSigninRoute } from "./signin";
import { userSignupRoute } from "./signup";

export const usersRoutes: RouteOptions[] = [userSigninRoute, userSignupRoute];
