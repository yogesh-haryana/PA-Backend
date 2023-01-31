const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    role: {
        required: true,
        type: String,
    }
});

const signUp = mongoose.model("credentials", signUpSchema);

module.exports = { signUp };