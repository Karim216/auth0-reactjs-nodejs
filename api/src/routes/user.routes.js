module.exports = (userapp) => {
  const express = require("express");
  const user = require("../controllers/user.controller.js");
  const app = express();

  

  let router = require("express").Router();


  router.get("/", user.getAllUsers);
  router.get("/:id", user.getUserById);

  userapp.use("/users", router);
};
