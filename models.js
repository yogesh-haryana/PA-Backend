const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    fullName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    empId: {
        required: true,
        type: String,
    },
    officeLoc: {
        required: true,
        type: String,
    },
    department: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    confrmPswrd: {
        required: true,
        type: String,
    }
});

const VerifiedUsers = new mongoose.Schema({
    fullName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    empId: {
        required: true,
        type: String,
    },
    officeLoc: {
        required: true,
        type: String,
    },
    department: {
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
    },
    designation: {
        type: String
    }
});

const signUp = mongoose.model("signup", signUpSchema);
const verifiedUsers = mongoose.model("verifiedUsers", VerifiedUsers);


module.exports = { signUp, verifiedUsers };
