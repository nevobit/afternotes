import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { v4 as UUID } from "uuid";
import { Note } from "../../types/models/notes/notes";
import { FolderSchemaMongo } from "../../types/models/folders/folders-mongo";

export const createFolder = async (data: Note) => {
  const model = getModel(Collection.FOLDERS, FolderSchemaMongo);
  const uuid = UUID();
  const folder = new model({ ...data, uuid });

  await folder.save();
  return folder;
};
