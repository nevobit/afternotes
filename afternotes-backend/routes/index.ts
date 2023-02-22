import { FastifyInstance, RouteOptions } from "fastify";
import { noteRoutes } from "./notes";

const routes: RouteOptions[] = [...noteRoutes];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
