import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { NoteSchemaMongo } from "../../types/models/notes/notes-mongo";
import { v4 as UUID } from "uuid";
import { Note } from "../../types/models/notes/notes";

export const createNote = async (data: Note) => {
  console.log({ data });
  const model = getModel(Collection.NOTES, NoteSchemaMongo);
  const uuid = UUID();
  const note = new model({ ...data, uuid });

  await note.save();
  return note;
};
