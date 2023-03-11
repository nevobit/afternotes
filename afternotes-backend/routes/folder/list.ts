import { RouteOptions } from "fastify";
import { listFolders } from "../../business-logic/folders/list";
import { Folder } from "../../types";

export const listFoldersRoute: RouteOptions = {
  method: "GET",
  url: "/folders",
  handler: async (request, reply) => {
    const { body } = request;
    const { uuid } = body as Folder;
    try {
      const folders = await listFolders(uuid);
      reply.status(200).send(folders);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
