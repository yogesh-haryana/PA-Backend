const mongoose = require("mongoose");

const settingSachema = new mongoose.Schema({
  toggle: {
    required: true,
    type: Boolean,
  },
  fy: {
    required: true,
    type: Number,
  },
});

const ToggleSetting = mongoose.model("setting", settingSachema);

module.exports = { ToggleSetting };
