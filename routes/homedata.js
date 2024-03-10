const express = require("express");
const path = require("path");
const sendingmail = require("../send_mail/sendmail");
const homeRouter = express.Router();
homeRouter.post("/mailsent", (req, res) => {
  const { to, subject, messagecontent } = req.body;
  sendingmail(to, subject, messagecontent);
  res.render("successfully");
});

module.exports = homeRouter;
