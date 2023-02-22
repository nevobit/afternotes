import { RouteOptions } from "fastify";
import { createNote } from "../../business-logic/notes/create";
import { Note } from "../../types/models/notes/notes";
import { updateNote } from "../../business-logic/notes/update";

export const updateNoteRoute: RouteOptions = {
  method: "PUT",
  url: "/notes",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Note;
    try {
      const note = await updateNote(data);
      reply.status(200).send(note);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
