import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { Folder, FolderSchemaMongo } from "../../types";

export const updateFolder = async (data: Folder) => {
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
