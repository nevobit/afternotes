import { Schema } from "mongoose";
import { Folder } from "./folders";

export const FolderSchemaMongo = new Schema<Folder>(
  {
    uuid: { type: String, unique: true },
    name: { type: String },
    createdBy: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
