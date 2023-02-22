import { RouteOptions } from "fastify";
import { createNote } from "../../business-logic/notes/create";
import { Note } from "../../types/models/notes/notes";

export const createNoteRoute: RouteOptions = {
  method: "POST",
  url: "/notes",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Note;
    try {
      const note = await createNote(data);
      reply.status(201).send(note);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
