import { Schema } from "mongoose";
import { Note } from "./notes";

export const NoteSchemaMongo = new Schema<Note>(
  {
    uuid: { type: String, unique: true },
    title: { type: String },
    content: { type: String },
    tags: { type: [String] },
    folder: { type: String },
    createdBy: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
