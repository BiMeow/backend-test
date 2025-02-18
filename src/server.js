import exitHook from "async-exit-hook";
import express from "express";
import { env } from "~/config/environment";
import { CLOSE_DB, CONNECT_DB } from "~/config/mongodb";

const START_SERVER = async () => {
  const app = express();

  app.get("/", async (req, res) => {
    console.log(
      "BiMeow log db env.APP_PORT, env.APP_HOST",
      env.APP_PORT,
      env.APP_HOST
    );

    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello BiMeow, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`
    );
  });

  exitHook(() => {
    CLOSE_DB();
    console.log("Exit app");
  });
};

(async () => {
  try {
    console.log("BiMeow log connecting to db");
    await CONNECT_DB();
    console.log("BiMeow log connect db successfully");
    START_SERVER();
  } catch (error) {
    console.log("BiMeow log connect db failed", error);
    process.exit(0);
  }
})();
