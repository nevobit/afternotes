import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { NoteSchemaMongo } from "../../types/models/notes/notes-mongo";
import { v4 as UUID } from "uuid";
import { Note } from "../../types/models/notes/notes";

export const updateNote = async (data: Note) => {
  console.log({ data });
  const model = getModel(Collection.NOTES, NoteSchemaMongo);
  const note = await model.findOne({ uuid: data.uuid });

  if (!note) {
    throw new Error("602");
  }

  const dataToUpdate = { ...data };

  await note.update(dataToUpdate);

  return note;
};
