import { FastifyInstance, RouteOptions } from "fastify";
import { foldersRoutes } from "./folder";
import { noteRoutes } from "./notes";
import { usersRoutes } from "./users";

const routes: RouteOptions[] = [
  ...noteRoutes,
  ...usersRoutes,
  ...foldersRoutes,
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
