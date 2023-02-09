const mongoose = require("mongoose");

const newKRASchema = new mongoose.Schema({
  designation: {
    required: true,
    type: String,
  },
  KraName: {
    required: true,
    type: String,
  },
  KraDescription: {
    required: true,
    type: String,
  },
  weightage: {
    required: true,
    type: Number,
  },

});

const KRAModel = mongoose.model("KRAs", newKRASchema);

module.exports = { KRAModel };
