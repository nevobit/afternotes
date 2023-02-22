import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { NoteSchemaMongo } from "../../types/models/notes/notes-mongo";
import { Note } from "../../types/models/notes/notes";

export const listNotes = async (data: Note) => {
  const model = getModel(Collection.NOTES, NoteSchemaMongo);
  const notes = await model.find({});

  return notes;
};
