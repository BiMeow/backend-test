const MONGODB_URI =
  "mongodb+srv://nbtrex:RhpVEgpWOZsVYWIJ@cluster-bimeow-test-bac.lqgrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-BiMeow-Test-Backend";
const DATABASE_NAME = "bimeow-test-database";

import { MongoClient, ServerApiVersion } from "mongodb";

let bimeowTestDatabaseInstance = null;

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await client.connect();
  bimeowTestDatabaseInstance = client.db(DATABASE_NAME);
};

export const GET_DB = () => {
  if (!bimeowTestDatabaseInstance) throw new Error("Database is not connected");
  return bimeowTestDatabaseInstance;
};

export const CLOSE_DB = async () => {
  await client.close();
  console.log("BiMeow log close db");
};
