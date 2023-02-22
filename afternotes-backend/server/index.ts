import fastify from "fastify";
import { initMongoose } from "../data-sources/mongoose";
import * as dotenv from "dotenv";
import { registerRoutes } from "../routes";
import fastifyCors from "@fastify/cors";

dotenv.config();

const MONGO_URL = process.env.MONGODB_URI || "";

const server = fastify({
  logger: true,
});

(async () => {
  await initMongoose(MONGO_URL);

  server.register(fastifyCors, {
    origin: true,
  });

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" }
  );

  server.listen({ port: 5000, host: "0.0.0.0" }, () => {
    console.log("listening on port");
  });
})();
