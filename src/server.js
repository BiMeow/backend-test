// const express = require("express");
import express from "express";
const app = express();

const hostname = "localhost";
const port = 3000;

app.get("/", function (req, res) {
  res.send("<h1>Hello World, BiMeow is here!</h1>");
});

app.listen(port, hostname, () => {
  console.log(
    `BiMeow log running backend server at http://${hostname}:${port}`
  );
});
