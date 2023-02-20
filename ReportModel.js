const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  empId: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  fincYear: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Object,
    required: true,
  },
});

const Report = mongoose.model("report", reportSchema);
module.exports = { Report };
