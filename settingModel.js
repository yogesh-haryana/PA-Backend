const mongoose = require("mongoose");

const settingSachema = new mongoose.Schema({
  toggle: {
    required: true,
    type: Boolean,
  },
});

const ToggleSetting = mongoose.model("setting", settingSachema);

module.exports = { ToggleSetting };
