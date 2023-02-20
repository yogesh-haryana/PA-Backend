require("dotenv").config();
require("./config"); const express = require("express");
const cors = require("cors");
const { json } = require("express");
const router = require("./routes/userRoutes");
const kraRouter = require("./routes/kraRoutes");
const { goalRouter } = require("./routes/goalRoutes");
const { SettingRouter } = require("./routes/settingRoutes");
const reviewRouter = require("./routes/reviewRoutes");

const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(cors());
app.use("/api/users", router);
app.use("/api/kra", kraRouter);
app.use("/api/goals", goalRouter);
app.use("/api/settings", SettingRouter);
app.use("/api/reviews", reviewRouter);

async function start() {
  try {
    app.listen(port, () => {
      console.log("Server Started");
    });
  } catch {
    console.warn("Some Error Occured");
  }
}

start();
