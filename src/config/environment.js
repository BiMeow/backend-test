import "dotenv/config";
export const env = {
  APP_HOST: process.env.APP_HOST || "localhost",
  APP_PORT: process.env.APP_PORT || 7998,
  DATABASE_NAME: process.env.DATABASE_NAME || "",
  MONGODB_URI: process.env.MONGODB_URI || "",
};
