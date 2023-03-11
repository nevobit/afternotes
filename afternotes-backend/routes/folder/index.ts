import { RouteOptions } from "fastify";
import { createFolderRoute } from "./create";
import { listFoldersRoute } from "./list";
import { updateFolderRoute } from "./update";

export const foldersRoutes: RouteOptions[] = [
  createFolderRoute,
  listFoldersRoute,
  updateFolderRoute,
];
