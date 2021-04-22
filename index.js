const express = require("express"),
  app = express(),
  loginRouter = require("./login-router"),
  detailRouter = require("./detail-router"),
  bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/login", loginRouter);
app.use("/detail", detailRouter);

app.listen(3000, () => console.log(`I listen to 3000`));
