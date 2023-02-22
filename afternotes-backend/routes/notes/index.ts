import { RouteOptions } from "fastify";
import { createNoteRoute } from "./create";
import { listNotesRoute } from "./list";
import { updateNoteRoute } from "./update";

export const noteRoutes: RouteOptions[] = [
  createNoteRoute,
  listNotesRoute,
  updateNoteRoute,
];
