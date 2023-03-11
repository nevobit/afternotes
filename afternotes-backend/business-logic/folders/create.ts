import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { v4 as UUID } from "uuid";
import { Folder, FolderSchemaMongo } from "../../types";

export const createFolder = async (data: Folder) => {
  const model = getModel(Collection.FOLDERS, FolderSchemaMongo);
  const uuid = UUID();
  const folder = new model({ ...data, uuid });
  await folder.save();
  return folder;
};
