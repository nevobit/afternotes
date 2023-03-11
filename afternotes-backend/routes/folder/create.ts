import { RouteOptions } from "fastify";
import { createFolder } from "../../business-logic/folders/create";
import { Folder } from "../../types";

export const createFolderRoute: RouteOptions = {
  method: "POST",
  url: "/folders",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Folder;
    try {
      const folder = await createFolder(data);
      reply.status(201).send(folder);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
