import { RouteOptions } from "fastify";
import { updateFolder } from "../../business-logic/folders/update";
import { Folder } from "../../types";

export const updateFolderRoute: RouteOptions = {
  method: "PUT",
  url: "/folders",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Folder;
    try {
      const note = await updateFolder(data);
      reply.status(200).send(note);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
