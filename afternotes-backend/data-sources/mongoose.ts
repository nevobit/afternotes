import { connect, connection, Schema, model } from "mongoose";
import { Collection } from "./collection";

export const initMongoose = async (MONGO_URL: string) => {
  const conn = connection;
  conn.on("error", (error: any) => {
    console.error(`Error in MMongoose connection: ${JSON.stringify(error)}`);
    throw new Error(error);
  });

  conn.on("connected", () => {
    console.info(`Mongoose: Connected to ${MONGO_URL}`);
  });

  connection.on("reconnectFailed", () => {
    console.error("Mongoose: DB Connection Lost, retries failed");
  });

  await connect(MONGO_URL, {
    autoIndex: true,
  });
};

export const getModel = (collectionName: Collection, schema: Schema) => {
  return model(collectionName, schema);
};
