import { RouteOptions } from "fastify";
import { createNote } from "../../business-logic/notes/create";
import { listNotes } from "../../business-logic/notes/list";
import { Note } from "../../types/models/notes/notes";

export const listNotesRoute: RouteOptions = {
  method: "GET",
  url: "/notes",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Note;
    try {
      const notes = await listNotes(data);
      reply.status(200).send(notes);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
