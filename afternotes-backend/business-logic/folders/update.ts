import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { NoteSchemaMongo } from "../../types/models/notes/notes-mongo";
import { v4 as UUID } from "uuid";
import { Note } from "../../types/models/notes/notes";
import { FolderSchemaMongo } from "../../types/models/folders/folders-mongo";

export const updateFolder = async (data: Note) => {
  console.log({ data });
  const model = getModel(Collection.FOLDERS, FolderSchemaMongo);
  const folder = await model.findOne({ uuid: data.uuid });

  if (!folder) {
    throw new Error("602");
  }

  const dataToUpdate = { ...data };

  await folder.update(dataToUpdate);

  return folder;
};
