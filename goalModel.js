const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  designation: {
    required: true,
    type: String,
  },
  KraName: {
    required: true,
    type: String,
  },
  goalName: {
    required: true,
    type: String,
  },
  goalDescription: {
    required: true,
    type: String,
  },
});

const GoalModel = mongoose.model("goals", goalSchema);

module.exports = { GoalModel };
