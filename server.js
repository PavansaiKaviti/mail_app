//creating a server
const express = require("express");
const path = require("path");
const homeRouter = require("./routes/homedata");

// using modules
const app = express();
const Port = 3000;
//middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// request
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "public/views", "mailform"));
});
//post data
app.use("/", homeRouter);
// port
app.listen(Port, (error) => {
  try {
    console.log(`server connected at port :http://localhost:${Port}`);
  } catch (error) {
    console.log("message :", error);
  }
});
