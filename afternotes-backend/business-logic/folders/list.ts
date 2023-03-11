import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { FolderSchemaMongo } from "../../types/models/folders/folders-mongo";

export const listFolders = async (uuid: string) => {
  const model = getModel(Collection.FOLDERS, FolderSchemaMongo);
  const folders = await model.find({user: uuid});

  return folders;
};
