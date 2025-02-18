import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "~/config/environment";

let bimeowTestDatabaseInstance = null;

const client = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await client.connect();
  bimeowTestDatabaseInstance = client.db(env.DATABASE_NAME);
};

export const GET_DB = () => {
  if (!bimeowTestDatabaseInstance) throw new Error("Database is not connected");
  return bimeowTestDatabaseInstance;
};

export const CLOSE_DB = async () => {
  console.log("BiMeow log close db");
  await client.close();
};
