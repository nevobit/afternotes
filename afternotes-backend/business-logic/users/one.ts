import { Collection } from "../../data-sources/collection";
import { getModel } from "../../data-sources/mongoose";
import { UserSchemaMongo } from "../../types/models/users/users.mongo";

export const userById = async (uuid: string) => {
  const model = getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.find({uuid});

  return user;
};
