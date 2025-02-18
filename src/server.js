import exitHook from "async-exit-hook";
import express from "express";
import { CLOSE_DB, CONNECT_DB, GET_DB } from "~/config/mongodb";

const START_SERVER = async () => {
  const app = express();

  const hostname = "localhost";
  const port = 7998;

  app.get("/", async (req, res) => {
    console.log(
      "BiMeow log db listCollections",
      await GET_DB().listCollections().toArray()
    );

    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello BiMeow, I am running at http://${hostname}:${port}/`);
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
