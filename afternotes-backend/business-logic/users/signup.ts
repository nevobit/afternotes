import { v4 as UUID } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, UserSchemaMongo } from "../../types";
import { Collection, getModel } from "../../data-sources";

type PartialUser = Partial<User>;
export const userSignup = async ({
  name,
  photo,
  email,
  password,
}: PartialUser): Promise<any> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ email: email });

  if (user) {
    throw new Error("El usuario ya esta registrado");
  } else {
    const uuid = UUID();
    if (password) {
      password = bcrypt.hashSync(password, 10);
    }

    const user = new model({
      uuid,
      name,
      photo,
      email,
      password,
    });

    await user.save();

    const token = jwt.sign(
      {
        uuid: uuid,
        name: name,
        photo: photo,
        email: email,
      },
      process.env.JWT_SECRET_KEY || "",
      { expiresIn: "24h" }
    );

    return {
      token,
      ...user._doc,
    };
  }
};
