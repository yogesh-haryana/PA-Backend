const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

module.export = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("success"))
  .catch((error) => console.log(error));
