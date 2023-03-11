import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { NoteSchemaMongo } from "../../types/models/notes/notes-mongo";
import { Note } from "../../types/models/notes/notes";

export const listNotes = async (uuid: string) => {
  const model = getModel(Collection.NOTES, NoteSchemaMongo);
  const notes = await model.find({user: uuid});

  return notes;
};
