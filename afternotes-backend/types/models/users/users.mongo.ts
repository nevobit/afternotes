import { Schema } from "mongoose";
import { User } from "./users";

export const UserSchemaMongo = new Schema<User>(
  {
    uuid: { type: String, unique: true },
    name: { type: String },
    password: { type: String },
    email: { type: String },
    photo: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
