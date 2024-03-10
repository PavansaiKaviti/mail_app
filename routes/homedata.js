const express = require("express");
const homeRouter = express.Router();
homeRouter.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = homeRouter;
